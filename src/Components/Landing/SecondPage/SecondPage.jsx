import styles from './SecondPage.module.css'

export const SecondPage = () =>{

    return (
        <div className={styles.container}>
          <div className={styles.inlineBlock}>

              <div className={styles.textContainer}>
                  <div className={styles.textAlign}>
                      <p className={styles.p}>С нами лучше</p>
                      <div className={styles.text}>
                         <span className={styles.span}>Учавствуйте в конкурсах, спортивных соревнованиях, а также
                         разных олимпиадах</span>
                      </div>
                  </div>
              </div>




              <div className={styles.flex + ' ' + styles.imageContainer}>
                  <div><h1>Hello world!</h1></div>
                  <div><h1>Hello world!</h1></div>
                  <div><h1>Hello world!</h1></div>
                  <div><h1>Hello world!</h1></div>

              </div>




              {/*   <div></div>*/}
          </div>
        </div>
    )
}