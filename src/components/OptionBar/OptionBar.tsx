import React from "react";
import {FiPlusSquare} from "react-icons/fi";
import styles from "./optionBar.module.scss";
import { useColorContext } from "../../Context/ColorContext";

function OptionBar() {
    const colorContext = useColorContext();
    
    
    return (
        <>
            <div style={{display: "flex", flexDirection:"row", width:"100%", height:"56px"}}>
            <FiPlusSquare className={styles.addColor} onClick={()=>{colorContext.dispatchColorAction({type:"Add Color"})}}/>
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
            </div>
        </>
    );
}

export default OptionBar;
