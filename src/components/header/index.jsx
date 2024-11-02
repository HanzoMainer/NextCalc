import styles from "./style.module.css";
export function Header() 
{
  return (
    <>
        <div className={styles.headerContainer}>
            <div className={styles.headerName}>    
                <div className="logo"><img src="Logo.svg" alt="Logo.svg"/></div>        
                <div><h1>NextCalc</h1></div>
            </div>

        </div>
    </>
  )
}
