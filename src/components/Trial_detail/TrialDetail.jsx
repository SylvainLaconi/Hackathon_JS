import React, { useEffect, useState } from "react";
import { Header } from "../Header"
import { Footer } from "../Footer"
import { PlayerCard } from "./PlayerCard.jsx"
import styles from './trialdetail.module.css';

export const TrialDetail = () => {

    const [playerList, setPlayerList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/players")
            .then((res) => res.json())
            .then((result) => {
                setIsLoaded(true);
                setPlayerList(result);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <>
                {/* <Header /> */}
                <div className={styles.TrialDetail}>
                    <div className={styles.wrapper}>
                        {playerList.filter(player => player.team === "Wild").map(TeamWild => (
                            <>
                                < PlayerCard
                                    name={TeamWild.name}
                                    image={TeamWild.photo}
                                    planet={TeamWild.planet}
                                    species={TeamWild.species}
                                    playerDescription={TeamWild.player_description}
                                />
                            </>
                        ))}
                    </div>
                    <div className={styles.game}>



                    </div>

                    <div className={styles.wrapper}>
                        {playerList.filter(player => player.team === "Mars").map(TeamWild => (
                            <>
                                < PlayerCard
                                    name={TeamWild.name}
                                    image={TeamWild.photo}
                                    planet={TeamWild.planet}
                                    species={TeamWild.species}
                                    playerDescription={TeamWild.player_description}
                                />
                            </>
                        ))}
                    </div>
                </div>
                {/* <Footer /> */}
            </>
        )
    }
}