import styles from "../Welcome.module.css";

export const Title = () => {
   return(
       <div className={styles.title}>
           <div className={styles.titleContainer}>
               <h1 className={styles.h1}>
                   <span className={styles.span}>Добро пожалавать в КЭТ</span>
                   <span className={styles.span}>сайт для студентов</span>
               </h1>
           </div>
       </div>
   )
}