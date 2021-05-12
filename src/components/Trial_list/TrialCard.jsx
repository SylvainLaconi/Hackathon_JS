import React from "react";
import styles from "./TrialCard.module.sass"
import { Link } from "react-router-dom";

export default function TrialCard({ title, place, image, description, id }) {

    return (
        <Link to={`/trialdetail/${id}`} style={{ textDecoration: 'none' }}>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img src={image} />
                    <div className={styles.title}>
                        <h1>{title}</h1>
                    </div>
                    <div className={styles.info}>
                        <h3>{place}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
