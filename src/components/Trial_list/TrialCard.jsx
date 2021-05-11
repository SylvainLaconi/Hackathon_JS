import React from "react";
import styles from "./TrialCard.module.sass"

export default function TrialCard({title, place, image, description}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={image}/>
                    <div className={styles.info}>
                        <h1>{title}</h1>
                        <h3>{place}</h3>
                        <p>{description}</p>
                        <button>Interested?</button>
                    </div>
            </div>
        </div>
    )
}

/*<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Syrtis_Major_MC-13.jpg/1024px-Syrtis_Major_MC-13.jpg"/>*/