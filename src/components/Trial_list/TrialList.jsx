import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './TrialList.module.css'
import TrialCard from './TrialCard'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'

const TrialList = () => {
    const [trials, setTrials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [readStatus, writeStatus] = useState("");


    useEffect(() => {
        const getTrials = async () => {
            try {
                const trialsList = await axios.get('/api/games')
                setTrials(trialsList.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getTrials()
    }, [loading]);

    const deleteRow = async (id, e) => {
        e.preventDefault();
        try {
            await axios.delete(`/api/games/${id}`);
            writeStatus("Post successfully deleted");
            setTimeout(() => writeStatus(""), 3000);
        } catch (err) {
            writeStatus("Post deletion failed");
        }
    };

    if (loading) return <div>Loading...</div>

    return (
        <>
            <div className={styles.TrialList}>
                <div className={styles.MapList}>
                    {
                        (trials.length > 0) && (
                            trials.map((trial) => {
                                return (
                                    <div>
                                        <TrialCard
                                            key={trial.id}
                                            title={trial.title}
                                            place={trial.place}
                                            image={trial.image}
                                            description={trial.description}
                                            id={trial.idgames}
                                        />
                                        <Link to="/trialcreation">
                                            <button className={styles.buttonRemove} onClick={(e) => deleteRow(trial.idgames, e)}>Remove</button>
                                        </Link>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
                <Link to={'/trialcreation'}>
                    <button className={styles.buttonTrialList}>
                        Add challenge
                    </button>
                </Link>
            </div>
        </>
    )
};
export default TrialList;
