import styles from "./style.module.css";
import { CalculatorHead } from "./head";
import { CalculatorBody } from "./body";
import React, { useState, useEffect } from "react";

export function Calculator() {
    const [displayValue, setDisplayValue] = useState("EXAMPLE");
    const handleButtonClick = (value) => {
        if (value == "") setDisplayValue("");
        else if (value == "r") setDisplayValue((prev) => prev.slice(0, -1));
        else setDisplayValue((prev) => prev + value);
    };
    const handleKeyPress = (event) => {
        const key = event.key;
        if (!isNaN(key)) {
            handleButtonClick(key);
        } else if (key === "+") {
            handleButtonClick("+");
        } else if (key === "-") {
            handleButtonClick("-");
        } else if (key === "*") {
            handleButtonClick("*");
        } else if (key === "/") {
            handleButtonClick("/");
        } else if (key === ".") {
            handleButtonClick(".");
        } else if (key === "Backspace") {
            handleButtonClick("r");
        } else if (key.toLowerCase() === "c") {
            handleButtonClick("");
        } else if (key === "Enter" || key === "=") {
            console.log('Нажата клавиша "равно"');
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => handleKeyPress(event);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <>
            <div className={styles.calculatorGrid}>
                <div className={styles.calculator}>
                    <div className={styles.calculatorMiddleLine}></div>
                    <div className={styles.calculatorComponentLeft}>
                        <CalculatorHead displayValue={displayValue} />
                        <CalculatorBody onButtonClick={handleButtonClick} />
                    </div>
                    <div className={styles.calculatorComponentRight}></div>
                </div>
            </div>
        </>
    );
}
