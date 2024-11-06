import styles from "./style.module.css";

export function CalculatorHead({ displayValue }) {
    return (
        <>
            <div className={styles.calculatorHeadContainer}>
                <div className={styles.calculatorHeadHistory}>EXAMPLE</div>
                <div className={styles.calculatorHeadCondition}>{displayValue}</div>
            </div>
        </>     
    );
}
