import styles from "./style.module.css";

export function CalculatorBody({ onButtonClick }) {
    (value) => {
        onButtonClick(value);
    };
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
                <div
                    className={styles.calculatorAcButtons}
                    onClick={() => onButtonClick("")}
                >
                    <div className={styles.calculatorAc}>Ac</div>
                </div>
                <div
                    className={styles.calculatorAcButtons}
                    onClick={() => onButtonClick("r")}
                >
                    <div className={styles.deleteButton}>
                        <img src="DeleteButton.svg" alt="Стереть" />
                    </div>
                </div>
                <div
                    className={styles.calculatorOperationsButtons}
                    onClick={() => onButtonClick("/")}
                >
                    <div className={styles.calculatorOperations}>
                        <img src="DignityButton.svg" alt="Разделить" />
                    </div>
                </div>
                <div
                    className={styles.calculatorOperationsButtons}
                    onClick={() => onButtonClick("*")}
                >
                    <div className={styles.calculatorOperations}>*</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("7")}
                >
                    <div className={styles.calculatorNumbers}>7</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("8")}
                >
                    <div className={styles.calculatorNumbers}>8</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("9")}
                >
                    <div className={styles.calculatorNumbers}>9</div>
                </div>
                <div
                    className={styles.calculatorOperationsButtons}
                    onClick={() => onButtonClick("-")}
                >
                    <div className={styles.calculatorOperations}>-</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("4")}
                >
                    <div className={styles.calculatorNumbers}>4</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("5")}
                >
                    <div className={styles.calculatorNumbers}>5</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("6")}
                >
                    <div className={styles.calculatorNumbers}>6</div>
                </div>
                <div
                    className={styles.calculatorPlusButton}
                    onClick={() => onButtonClick("+")}
                >
                    <div className={styles.calculatorOperations}>+</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("1")}
                >
                    <div className={styles.calculatorNumbers}>1</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("2")}
                >
                    <div className={styles.calculatorNumbers}>2</div>
                </div>
                <div
                    className={styles.calculatorNumbersButtons}
                    onClick={() => onButtonClick("3")}
                >
                    <div className={styles.calculatorNumbers}>3</div>
                </div>
                <div className={styles.emptyPoint}></div>
                <div
                    className={styles.calculatorZeroButton}
                    onClick={() => onButtonClick("0")}
                >
                    <div className={styles.calculatorNumbers}>0</div>
                </div>
                <div className={styles.emptyPoint}></div>
                <div
                    className={styles.calculatorDotButton}
                    onClick={() => onButtonClick(".")}
                >
                    <div className={styles.calculatorNumbers}>.</div>
                </div>
                <div className={styles.calculatorEqButton}>
                    <div className={styles.calculatorOperations}>=</div>
                </div>
            </div>
        </>
    );
}
