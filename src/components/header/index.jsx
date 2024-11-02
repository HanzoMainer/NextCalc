import styles from "./style.module.css";
export function Header() 
{
  return (
    <>
        <div className={styles.headerContainer}>
            <h1>
                <img src="Logo.svg" alt="" />
               NextCalc
            </h1>
        </div>
    </>
  )
}
