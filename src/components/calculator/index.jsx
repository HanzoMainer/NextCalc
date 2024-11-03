import styles from "./style.module.css";
import { CalculatorHead } from "./head";
import { CalculatorBody } from "./body"

export function Calculator() {
    return (
        <>
            <div className={styles.calculatorGrid}>
                <div className={styles.calculator}>
                    <div className={styles.calculatorMiddleLine}></div>
                    <div className={styles.calculatorComponentLeft}>
                        <CalculatorHead />
                        <CalculatorBody />
                    </div>
                    <div className={styles.calculatorComponentRight}></div>
                </div>
            </div>
        </>
    );
}
