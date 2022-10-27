import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from './Header.module.css';
import { NavLink} from "react-router-dom";
import image from './img/100040000000000000027262.png'
import {Dropdown} from "./Dropdown/Dropdown";

export const Header = (props) => {
    const [scrolled, setScrolled] = useState(false);
  //  const ref = React.createRef();

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
                       <Dropdown linkName = {'Абитуриенту'} linksPath = {'Profile'}/>
                       <Dropdown linkName = {'Сведения об образовательной организации'} linksPath = {'Profile1'}/>
                       <Dropdown linkName = {'Информация о техникуме'} linksPath = {'Profile2'}/>
                    </Nav>
                </div>

            </div>
        </Navbar>
    )
}