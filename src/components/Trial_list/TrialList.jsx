import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./TrialList.module.css"
import TrialCard from "./TrialCard"

export default function TrialList(){

    const [trials, setTrials] = useState([])
    const [loading, setLoading] = useState(true)

/*useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => setCharacters(res.data))
        .catch((err) => {
            console.log(err.response)
        })
}, [])*/

useEffect(() => {
    const getTrials = async () => {
        try {
            const trials = await axios.get("/api/games")
            setTrials(trials.data)    
        } catch (err) {
            console.log(err)
        }  finally {
            setLoading(false)                
        }
    }
    getTrials()
}, [loading])

console.log(trials)

if(loading) return <div>Loading...</div>

    return (
        <>
            
            <div className={styles.TrialList}>
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
                            />
                        )
                    })
                )
              
                }
            </div>
        
        </>
    )
}