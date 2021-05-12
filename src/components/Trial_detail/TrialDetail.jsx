import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PlayerCard from './PlayerCard.jsx'
import styles from './trialdetail.module.css'

const TrialDetail = () => {
    const [playerList, setPlayerList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [gameDetail, setGameDetail] = useState([])

    let { id } = useParams()
    console.log(id)

    //GET liste des players du game
    useEffect(() => {
        fetch(`/api/players/${id}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setPlayerList(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [id])

    //GET les détails du game

    useEffect(() => {
        fetch(`/api/games/${id}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setGameDetail(result[0])
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [id])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <>
                <div className={styles.TrialDetail}>
                    <div className={styles.BlockTeam}>
                        <div className={styles.teamName}>
                            <h2>Team Wild</h2>
                        </div>
                        <div className={styles.wrapper}>
                            {playerList
                                .filter((player) => player.team === "Wild")
                                .map((TeamWild) => (
                                    <>
                                        <PlayerCard
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
                    <div className={styles.game}>
                        <h3>{gameDetail.title}</h3>
                        <img
                            className={styles.imggame}
                            src={gameDetail.image}
                            alt={gameDetail.place}
                        />
                        <p>Place for battle : {gameDetail.place}</p>
                        <p>Description : {gameDetail.description}</p>
                    </div>
                    <div className={styles.BlockTeam}>
                        <div className={styles.wrapper}>
                            {playerList
                                .filter((player) => player.team === 'Mars')
                                .map((TeamWild) => (
                                    <>
                                        <PlayerCard
                                            name={TeamWild.name}
                                            image={TeamWild.photo}
                                            planet={TeamWild.planet}
                                            species={TeamWild.species}
                                            playerDescription={
                                                TeamWild.player_description
                                            }
                                        />
                                    </>
                                ))}
                        </div>
                        <div className={styles.teamName2}>
                            <h2>Team Mars</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TrialDetail
