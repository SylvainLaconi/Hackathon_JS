import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./TrialList.module.css"
import TrialCard from "./TrialCard"
import { Link } from "react-router-dom";


export default function TrialList() {
    const [trials, setTrials] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTrials = async () => {
            try {
                const trialsList = await axios.get("/api/games")
                setTrials(trialsList.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getTrials()
    }, [loading])

    console.log(trials)

    if (loading) return <div>Loading...</div>

    return (
        <>
            <div className={styles.TrialList}>
                <div className={styles.MapList}>
                    {
                        (trials.length > 0) && (
                            trials.map((trial) => {
                                return (
                                    <TrialCard
                                        key={trial.id}
                                        title={trial.title}
                                        place={trial.place}
                                        image={trial.image}
                                        description={trial.description}
                                        id={trial.idgames}
                                    />
                                )
                            })
                        )
                    }
                </div>
                <Link to={"/trialcreation"}>
                    <button className={styles.buttonTrialList}>Add challenge</button>
                </Link>
            </div>
                
        </>
    )
}
