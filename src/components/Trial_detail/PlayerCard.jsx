import React from 'react'
import styles from './trialdetail.module.css'

const PlayerCard = ({ name, image, planet, species, playerDescription }) => {
    return (
            <div class={styles.cardctn}>
                    <div className={styles.picture}>
                        <img className={styles.imgplayer} src={image}></img>
                    </div>
                    <div className={styles.infos}>
                        <h4 className={styles.playername}>{name}</h4>
                        <p>origin : <span>{planet}</span></p>
                        <p>race : <span>{species}</span></p> 
                        <p>about : <span>{playerDescription}</span></p>
                    </div>
            </div>
    )
}

export default PlayerCard
