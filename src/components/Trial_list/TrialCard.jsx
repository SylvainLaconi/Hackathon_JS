import React from "react";
import styles from "./TrialCard.module.sass"
import { Link } from "react-router-dom";

export default function TrialCard({ title, place, image, description, id }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={image} />
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.info}>
                    <h3>{place}</h3>
                    <p>{description}</p>
                    <Link to={`/trialdetail/${id}`}>
                        <button>Interested?</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

/*<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Syrtis_Major_MC-13.jpg/1024px-Syrtis_Major_MC-13.jpg"/>*/
