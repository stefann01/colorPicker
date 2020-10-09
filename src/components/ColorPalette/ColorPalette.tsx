import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import copy from "copy-to-clipboard";
import { useSnackbar } from "notistack";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import styles from "./colorPalette.module.scss";
import { MdContentCopy } from "react-icons/md";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
class PaletteModel {
    constructor(public colors: Array<string>) {}
}

const initialColors = new PaletteModel(["#ff2345", "#dd5412", "#ccdf90", "#123456"]);
function ColorPalette() {
    const [palette, setPallete] = useState<PaletteModel>(initialColors);
    const [height, setHeight] = useState<number>(0);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        const actualHeight = document.getElementById("picker")?.offsetHeight;
        if (actualHeight) {
            setHeight(actualHeight);
        }
    }, []);

    const handleKeyDown = (event: any) => {
        console.log("A key was pressed", event.keyCode);
        if (event.keyCode === 32) {
            let items: string[] = [];
            for (let i = 0; i < palette.colors.length; ++i) {
                items = [...items, "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")];
            }
            setPallete(new PaletteModel(items));
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    function changePalette(event: any, index: number) {
        let items = [...palette.colors];
        items[index] = event.target.value;
        setPallete(new PaletteModel(items));
    }

    function copyCodeToClipboard(color: string) {
        copy(color.toString());
        enqueueSnackbar("Copied to clipboard", {
            variant: "success",
            autoHideDuration: 1200,
        });
    }

    function validateHexColor(color: string) {
        return /^#[0-9A-F]{6}$/i.test(color);
    }

    return (
        <div className={styles.colorPalette}>
            <ReactTooltip />
            {palette.colors.map((color, index) => (
                <div key={index} className={styles.parent} style={{ backgroundColor: color, width: "100%" }}>
                    <input type="text" value={color} style={{ marginBottom: "30px" }} />
                    <MdContentCopy className={styles.child} data-tip="Copy to Clipboard" onClick={() => copyCodeToClipboard(color)} />
                    <HiOutlineLockOpen className={styles.child} data-tip="Lock color" />
                    <div>
                        <AiOutlineLeft data-tip="Move Left" className={styles.iconMove} />
                        <AiOutlineRight data-tip="Move Right" className={styles.iconMove} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default React.memo(ColorPalette);
