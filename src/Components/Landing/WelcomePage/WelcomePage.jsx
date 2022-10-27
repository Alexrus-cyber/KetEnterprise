import styles from './Welcome.module.css';
import React, {useEffect} from "react";
import {Title} from "./Title/Title";
import image from './Ket.PNG';
import image1 from './zdanieKET4.jpg';
import image2 from './Tel.JPG';
import gsap from 'gsap';

export const WelcomePage = () => {
    const ref = React.createRef();
    const refPhone = React.createRef();
    const refTable = React.createRef();


    useEffect(()=> {
        const el = ref.current;
        const phone = refPhone.current;
        const tablet = refTable.current;
        gsap.fromTo(el, {opacity: "30%" },{opacity: "100%", duration: 3})
        gsap.fromTo(tablet, {x: -200},{opacity: "100%", x: 0, duration: 2.3})
        gsap.fromTo(phone, {x: 200},{opacity: "100%", x: 0, duration: 2.3})
    })



    return (
            <div className={styles.container} >
                <div className={styles.welcome} ref={ref}>
                        <div className={styles.superTitle}> {/*Первый заголовок*/}
                            <div style={{display: "inline-block"}}>
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

                    </div>
                        <div className={styles.second + ' ' + styles.center}> {/*Второй Галлерея*/}
                            <div ref={refTable} className={styles.flex}>
                                <div className={styles.inlineBlock}>
                                    <div className={styles.imageLap}>
                                        <img className={styles.imageLaptop} src={image1} alt={''}/>
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
                            <div ref={refPhone} className={styles.flex}>
                                <div className={styles.inlineBlock}>
                                    <div className={styles.imageContainerPhone + ' ' + styles.flex}>
                                        <div style={{
                                            margin: "auto"
                                        }} className={styles.inlineBlock}>
                                            <img className={styles.imagePhone} src={image2} alt={''}/>
                                            <div className={styles.circleC}>
                                                <div className={styles.circle}></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> {/*Телефон*/}
                        </div>
                        <div className={styles.third + ' '+ styles.flex + ' ' + styles.thirdH1}>
                            <div className={styles.thirdContainer}>
                                <h1>
                                    <span className={styles.span}> КЭТ — это медаль «Европейское качество» и победа в конкурсе «100 лучших ссузов России».</span>
                                </h1>

                            </div>

                        </div>
                </div>
            </div>

    )
}
