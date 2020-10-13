import React from "react";
import {FiPlusSquare, FiMinusSquare} from "react-icons/fi";
import styles from "./optionBar.module.scss";
import { useColorContext } from "../../Context/ColorContext";
import { useSnackbar } from "notistack";

function OptionBar() {
    const colorContext = useColorContext();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleAddColor = () => {
        colorContext.colors.length < 10? colorContext.dispatchColorAction({type:"Add Color"}): enqueueSnackbar("Color limit reached", {
            variant: "warning",
            autoHideDuration: 1000,
            preventDuplicate: true,
        });
    }

    const handleRemoveColor = () => {
        colorContext.colors.length !== 1? colorContext.dispatchColorAction({type:"Remove Last Color"}): enqueueSnackbar("Color limit reached", {
            variant: "warning",
            autoHideDuration: 1000,
            preventDuplicate: true,
        });
    }
    
    return (
        <>
            <div style={{display: "flex", flexDirection:"row", width:"100%", height:"56px"}}>
            <FiPlusSquare className={styles.addColor} onClick={handleAddColor}/>
            <button className={styles.generateButton} onClick={()=>{colorContext.dispatchColorAction({type:"Generate"})}}>Generate</button>
            <select className={styles.generateMethod}>
                <option defaultChecked>Generate Method:</option>
                <option>Random</option>
                <option>Monochrome</option>
            </select>
            <select className={styles.gradient}>
                <option>Gradient</option>
                <option>Locked gradient</option>
            </select>
            <FiMinusSquare data-tip="Remove last color" className={styles.removeColor} onClick={handleRemoveColor}/>
            </div>
        </>
    );
}

export default OptionBar;
