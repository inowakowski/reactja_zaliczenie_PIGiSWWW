import React from "react";
import Button from "../Button";
import Logo from "../Logo";

import styles from "./Navbar.module.scss";

const Navbar = () => {
    return <div className={styles.Navbar}>
        <Logo name="kocimiętka"/>
        <div className={styles.ButtonContainer}>
            <Button name="strona główna"/>
            <Button name="przysmaki"/>
            <Button name="akcesoria"/>
        </div>
    </div>;
}

export default Navbar;