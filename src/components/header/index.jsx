import styles from "./style.module.css";
export function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <div>
                        <img src="Logo.svg" alt="Логотип" />
                    </div>
                    <div className={styles.headerName}>
                        <h1>NextCalc</h1>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.headerAuthorizationButton}>
                        <img src="Iconly.svg" alt="Авторизация" />
                        Авторизация
                    </div>
                    <div className={styles.headerRegistrationButton}>
                        <img src="Iconly(1).svg" alt="Регистрация" />
                        Регистрация
                    </div>
                </div>
            </div>
        </>
    );
}
