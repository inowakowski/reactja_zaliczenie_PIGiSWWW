import React, { createContext } from "react";

import styles from "./Button.module.scss";

const Button = ({name}) => {
    return <div className={styles.Button}>
        {name}
    </div>;
}

export default Button;