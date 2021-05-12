import React from 'react'
import styles from './trialdetail.module.css'

const PlayerCard = ({ name, image, planet, species, playerDescription }) => {
    return (
        <div class={styles.cardctn}>
            <div className={styles.picture}>
                <img className={styles.imgplayer} src={image}></img>
            </div>
            <div className={styles.infos}>
                <div className={styles.topInfos}>
                <h4 className={styles.playername}>{name}</h4>
                <img className={styles.deleteCross}src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Android_Emoji_2716.svg"/>
                </div>
                <p>
                    origin : <span>{planet}</span>
                </p>
                <p>
                    race : <span>{species}</span>
                </p>
                <p>
                    about : <span>{playerDescription}</span>
                </p>
            </div>
        </div>
    )
}

export default PlayerCard
