import styles from "../Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const Dropdown = (props) => {
    return (
        <div  className={styles.dropdownContainer}>
            <NavLink to={props.linksPath} className={({ isActive }) => (isActive ? styles.active : styles.link)}>{props.linkName}</NavLink>
            <div  className={styles.dropdown}>
                <a href='#3443'>ПРИЕМНАЯ КОМИССИЯ</a>
                <a href="#4343">Сделай свой выбор</a>
                <a href="#43">Специальности</a>
            </div>
        </div>
    )
}