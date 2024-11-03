import styles from "./style.module.css";
export function CalculatorHead() {
    return (
        <>
            <div className={styles.calculatorHeadContainer}>
                <div className={styles.calculatorHeadHistory}>EXAMPLE</div>
                <div className={styles.calculatorHeadCondition}>EXAMPLE</div>
            </div>
        </>
    );
}
