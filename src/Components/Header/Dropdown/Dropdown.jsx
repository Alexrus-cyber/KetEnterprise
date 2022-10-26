import styles from "../Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const Dropdown = () => {
    return (
        <div  className={styles.dropdownContainer}>
            <NavLink   to={'Poster'} className={({ isActive }) => (isActive ? styles.active : styles.link)}>Абитуриенту</NavLink>
            <div  className={styles.dropdown}>
                <a href='#'>ПРИЕМНАЯ КОМИССИЯ</a>
                <a href="#">Сделай свой выбор</a>
                <a href="#">Специальности</a>
            </div>
        </div>
    )
}