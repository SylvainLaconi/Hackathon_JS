import React from "react";
import styles from "./TrialCard.module.scss"

export default function TrialCard() {

    return (
        <div className={styles.TrialCard}>
            <div className={styles.TrialCard_pageContent}>
                <div className={styles.TrialCard_card}>
                    <div className={styles.TrialCard_content}>
                        <h2 className={styles.TrialCard_title}>Mountain View</h2>
                        <p className={styles.TrialCard_copy}>Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
                        <button className={styles.TrialCard_btn}>View Trips</button>
                    </div>
                </div>
            </div>
        </div>
    )
}