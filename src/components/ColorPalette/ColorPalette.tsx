import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { useSnackbar } from "notistack";
import styles from "./colorPalette.module.scss";
import { MdContentCopy } from "react-icons/md";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import { useColorContext } from "../../Context/ColorContext";
import { FiTrash2 } from "react-icons/fi";

function ColorPalette() {
    const colorContext = useColorContext();
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
        switch(event.keyCode){
            case 32:colorContext.dispatchColorAction({type:"Generate"});
        }
    };
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);


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
            {colorContext.colors.map((color, index) => (
                <div key={index} className={styles.parent} style={{ backgroundColor: color.hexCode, width: "100%" }}>
                    <input type="text" value={color.hexCode} style={{ marginLeft: "30%", marginRight:"30%" }} />
                    <MdContentCopy className={styles.child} data-tip="Copy to Clipboard" onClick={() => copyCodeToClipboard(color.hexCode)} />
                    <HiOutlineLockOpen className={styles.child} data-tip="Lock color" />
                    <div>
                        <AiOutlineLeft data-tip="Move Left" className={styles.iconMove} onClick={()=>{colorContext.dispatchColorAction({type:"Move Left", payload:{index:index}})}} />
                        <AiOutlineRight data-tip="Move Right" className={styles.iconMove} onClick={()=>{colorContext.dispatchColorAction({type:"Move Right", payload:{index:index}})}} />
                    </div>
                    <FiTrash2  className={styles.iconDelete} onClick={()=>{colorContext.dispatchColorAction({type:"Remove", payload: index})}} />
                </div>
            ))}
        </div>
    );
}

export default React.memo(ColorPalette);
