import React from "react";
import { Header } from "../Header"
import { Footer } from "../Footer"
import styles from "./TrialList.module.css"
import TrialCard from "./TrialCard"

export default function TrialList(){

    return (
        <>
            <Header />
            <div className={styles.TrialList}>
                <TrialCard />
            </div>
            <Footer />
        </>
    )
}