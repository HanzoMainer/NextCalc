import styles from "./style.module.css";
import { CalculatorHead } from "./head";
import { CalculatorBody } from "./body"
import React, { useState } from "react";

export function Calculator() {
    const [displayValue, setDisplayValue] = useState("EXAMPLE");
    const handleButtonClick = (value) => {
      setDisplayValue(value);
    };

    return (
        <>
            <div className={styles.calculatorGrid}>
                <div className={styles.calculator}>
                    <div className={styles.calculatorMiddleLine}></div>
                    <div className={styles.calculatorComponentLeft}>
                        <CalculatorHead  displayValue={displayValue} />
                        <CalculatorBody onButtonClick={handleButtonClick} />
                    </div>
                    <div className={styles.calculatorComponentRight}></div>
                </div>
            </div>
        </>
    );
}
