import React, { createContext } from "react";

import styles from "./Logo.module.scss";

const Logo = ({name}) => {
    return <div className={styles.Logo}>
        {name}
    </div>;
}

export default Logo;