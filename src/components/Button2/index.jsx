import React, { createContext } from "react";
import styles from "./Button2.module.scss";

const Button2 = ({children}) => {
    return <div className={styles.Button2}>
        {children}
    </div>;
}

export default Button2;