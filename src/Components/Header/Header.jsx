import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from './Header.module.css';
import { NavLink} from "react-router-dom";
import image from './img/100040000000000000027262.png'
import gsap from 'gsap'
import {Dropdown} from "./Dropdown/Dropdown";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(0);
    const ref = React.createRef();




    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])



    const activeLink = styles.active;
    const normalLink = styles.link;
    return (
        <Navbar  className={styles.Navig +  ' ' + styles.scrolled + ' ' +  scrolled}>
            <div className={styles.container}>
                <div className={styles.leftIcons}>
                    <img className={styles.img} src={image} alt="Logo" />
                    <Nav className={styles.containerLinks}>
                        <div className={styles.dropdownContainer}>
                            <NavLink end to={'/'}  className={({ isActive }) => (isActive ? activeLink : normalLink)} >Главная</NavLink>

                        </div>
                       <Dropdown/>
                        <div className={styles.dropdownContainer}>
                            <NavLink to="Banner"  className={({ isActive }) => (isActive ? styles.active : styles.link)}>Сведения об образовательной организации</NavLink>
                            <div className={styles.dropdown}>
                                <a href='#'>Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <div className={styles.dropdownContainer}>
                            <NavLink to="Help"  className={({ isActive }) => (isActive ? styles.active : styles.link)}>Информация о техникуме</NavLink>
                            <div className={styles.dropdown}>
                                <a href='#'>Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </Nav>
                </div>
                <div style={{width: 256, height : 58.19, display: "flex", justifyContent: "right"}}>
                    <button><NavLink to={'Profile'}><h1 className={styles.img} >User</h1></NavLink></button>
                </div>
            </div>
        </Navbar>
    )
}