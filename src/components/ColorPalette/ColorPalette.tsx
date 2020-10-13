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
        switch (event.keyCode) {
            case 32:
                colorContext.dispatchColorAction({ type: "Generate" });
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
                    <input type="text" value={color.hexCode} style={{ width: "inherit" }} />
                    <MdContentCopy className={styles.child} data-tip="Copy to Clipboard" onClick={() => copyCodeToClipboard(color.hexCode)} />
                    {color.isLocked ? (
                        <HiOutlineLockClosed
                            onClick={() => {
                                colorContext.dispatchColorAction({ type: "LockUnlock", payload: { index } });
                            }}
                            className={styles.child}
                            data-tip="Unlock"
                        />
                    ) : (
                        <HiOutlineLockOpen
                            onClick={() => {
                                colorContext.dispatchColorAction({ type: "LockUnlock", payload: { index } });
                            }}
                            className={styles.child}
                            data-tip="Lock"
                        />
                    )}
                    <div>
                        <AiOutlineLeft
                            data-tip="Move Left"
                            className={styles.iconMove}
                            onClick={() => {
                                colorContext.dispatchColorAction({ type: "Move Left", payload: { index } });
                            }}
                        />
                        <AiOutlineRight
                            data-tip="Move Right"
                            className={styles.iconMove}
                            onClick={() => {
                                colorContext.dispatchColorAction({ type: "Move Right", payload: { index } });
                            }}
                        />
                    </div>
                    <FiTrash2
                        className={styles.iconDelete}
                        onClick={() => {
                            colorContext.dispatchColorAction({ type: "Remove", payload: index });
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default React.memo(ColorPalette);
