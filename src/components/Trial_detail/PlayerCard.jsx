import React from "react";
import styles from './trialdetail.module.css';

export const PlayerCard = ({ name, image, planet, species, playerDescription }) => {

    return (

        <div className={styles.contactList}>
            <div class={styles.row}>
                <div className={styles.col}>
                    <img src={image}></img><h4 className={styles.bold}>{name}</h4><p>{planet}</p><p>{species}</p> <p>{playerDescription}</p></div>
            </div>
        </div>
    )
}

