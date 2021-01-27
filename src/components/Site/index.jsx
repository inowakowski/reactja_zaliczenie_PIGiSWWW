import React from "react";
import styles from "./Site.module.scss";
import Button2 from "../Button2";
import MainIMG from "../../assets/cat_1.png";
import Img1 from '../../assets/cat-site-1.png'
import Img2 from '../../assets/cat-site-2.png'

const Site = () => {
    return <div className={styles.Site}>
        <div>
            <img src={MainIMG} alt="Kot patrzący na przeciw"/>
            <h2>Tutaj znajdziesz najróżniejsze zabawki dla swojeg pupila</h2>
            <Button2>
            Akcesoria i zabawki<img src={Img1}/>
            </Button2>
            <h2>Przysmaki każdego rodzaju czekają na towjego kota</h2>
            <Button2>
            Przysmaki<img src={Img2}/>
            </Button2>
        </div>
    </div>;
}

export default Site;