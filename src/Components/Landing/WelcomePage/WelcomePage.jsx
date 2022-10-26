import styles from './Welcome.module.css'
import {Title} from "./Title/Title";
import image from './Ket.PNG'
import image1 from './zdanieKET4.jpg'

export const WelcomePage = () => {
    return (
            <div className={styles.container}>
                <div className={styles.welcome}>
                    <div className={styles.superTitle}> {/*Первый заголовок*/}
                            <Title/>
                        <div className={styles.buttonContainer + ' ' + styles.flex}>
                            <p className={styles.p}>
                                КЭТ — это серьёзная профессиональная подготовка и
                                разносторонняя студенческая жизнь, это лекции, семинары и
                                практика на предприятиях Костромы, Костромской и Московской областей.
                            </p>
                        </div>
                            <div className={styles.buttonContainer}>
                                <a style={{textDecoration: "none", color: "white"}} href={'http://spo-ket.ru/'}>  <button className={styles.button}>Вернуться на основной сайт</button></a>
                            </div>
                    </div>
                        <div className={styles.second}> {/*Второй Галлерея*/}
                            <div className={styles.flex}>
                                <div className={styles.inlineBlock}>
                                    <div className={styles.imageLap}>
                                        <img className={styles.imageLaptop} src={image} alt={''}/>
                                    </div>
                                </div>
                            </div> {/*Планшет*/}
                            <div className={styles.flex}>
                                <div className={styles.inlineBlock}>
                                    <div className={styles.tablet}>
                                        <img className={styles.imageTablet} src={image} alt={''}/>
                                    </div>
                                    <div className={styles.imageLine}></div>
                                </div>
                            </div> {/*Ноутбук*/}
                            <div>
                                <div>
                                    <img className={styles.imageLaptop}  src={image1} alt={''}/>
                                </div>
                            </div> {/*Телефон*/}
                        </div>
                        <div className={styles.third}>

                        </div> {/*Третий блок*/}
                </div>
            </div>

    )
}
