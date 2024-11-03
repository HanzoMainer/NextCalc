import styles from "./style.module.css"

export function CalculatorBody() {
    return (
        <>
            <div className={styles.calculatorButtonsContainer}>
                <div className={styles.calculatorSinButtons}></div>
                <div className={styles.calculatorSinButtons}></div> 
                <div className={styles.calculatorSinButtons}></div> 
                <div className={styles.calculatorSinButtons}></div> 
                <div className={styles.calculatorAcButtons}></div>
                <div className={styles.calculatorAcButtons}></div>
                <div className={styles.calculatorOperationsButtons}></div>
                <div className={styles.calculatorNumbersButtons}></div>
                <div className={styles.calculatorEqButton}></div>
            </div>
        </>
    )
}