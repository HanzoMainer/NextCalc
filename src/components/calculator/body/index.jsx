import styles from "./style.module.css";

export function CalculatorBody() {
    return (
        <>
            <div className={styles.calculatorButtonsContainer}>
                <div className={styles.calculatorSinButtons}>
                    <div className={styles.calculatorSin}>e</div>
                </div>
                <div className={styles.calculatorSinButtons}>
                    <div className={styles.calculatorSin}>sin</div>
                </div>
                <div className={styles.calculatorSinButtons}>
                    <div className={styles.calculatorSin}>cos</div>
                </div>
                <div className={styles.calculatorSinButtons}>
                    <div className={styles.calculatorSin}>tg</div>
                </div>
                <div className={styles.calculatorAcButtons}>
                    <div className={styles.calculatorAc}>Ac</div>
                </div>
                <div className={styles.calculatorAcButtons}>
                    <div className={styles.deleteButton}>
                        <img src="DeleteButton.svg" alt="Стереть" />
                    </div>
                </div>
                <div className={styles.calculatorOperationsButtons}>
                    <div className={styles.calculatorOperations}>
                        <img src="DignityButton.svg" alt="Стереть" />
                    </div>
                </div>
                <div className={styles.calculatorOperationsButtons}>
                    <div className={styles.calculatorOperations}>*</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>7</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>8</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>9</div>
                </div>
                <div className={styles.calculatorOperationsButtons}>
                    <div className={styles.calculatorOperations}>-</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>4</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>5</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>6</div>
                </div>
                <div className={styles.calculatorPlusButton}>
                    <div className={styles.calculatorOperations}>+</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>1</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>2</div>
                </div>
                <div className={styles.calculatorNumbersButtons}>
                    <div className={styles.calculatorNumbers}>3</div>
                </div>
                <div></div>
                <div className={styles.calculatorZeroButton}>
                    <div className={styles.calculatorNumbers}>0</div>
                </div>
                <div></div>
                <div className={styles.calculatorDotButton}>
                    <div className={styles.calculatorNumbers}>.</div>
                </div>
                <div className={styles.calculatorEqButton}>
                    <div className={styles.calculatorOperations}>=</div>
                </div>
            </div>
        </>
    );
}
