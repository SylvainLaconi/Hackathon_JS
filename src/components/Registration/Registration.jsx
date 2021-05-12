import React, { useState, useEffect } from "react";
import "./registration.css";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [planet, setPlanet] = useState("");
  const [photo, setPhoto] = useState("");
  const [playerDescription, setPlayerDescription] = useState("");
  const [team, setTeam] = useState("");
  const [game, setGame] = useState("");

  const postPlayer = async (e) => {
    e.preventDefault();
    
    try {
      const newPlayer = await axios
      .post("/api/players", {
        name: name,
        species: species,
        planet: planet,
        photo: photo,
        player_description: playerDescription,
        team: team,
        games_idgames: game,
      })
    } catch (error) {
      alert("Register failed !")
    }
    
    alert(`${name} successfully registered`);
  };


  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [fetchGame, setFetchGame] = useState([])


  useEffect(() => {
    fetch(`/api/games/`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setFetchGame(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
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
        <div className="registration_background">
          <div className="regisSignupSection">
            <form
              className="regisSignupForm"
              name="signupform"
              onSubmit={postPlayer}
            >
              <h2 className="regisTitle">Join a challenge</h2>
              <ul className="regisNoBullet">
                <li>
                  <label htmlfor="player"></label>
                  <input
                    type="text"
                    className="regisInputFields"
                    id="player"
                    name="player"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <label htmlfor="species"></label>
                  <input
                    type="text"
                    className="regisInputFields"
                    id="species"
                    name="species"
                    placeholder="Species"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <label htmlfor="planet"></label>
                  <input
                    type="text"
                    className="regisInputFields"
                    id="planet"
                    name="planet"
                    placeholder="Planet"
                    value={planet}
                    onChange={(e) => setPlanet(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <label htmlfor="picture"></label>
                  <input
                    type="text"
                    className="regisInputFields"
                    id="picture"
                    name="picture"
                    placeholder="Picture url"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <label htmlfor="description"></label>
                  <textarea
                    type="text"
                    className="regisInputFields"
                    id="description"
                    name="description"
                    placeholder="Description"
                    maxLength="100"
                    cols="30"
                    rows="5"
                    value={playerDescription}
                    onChange={(e) => setPlayerDescription(e.target.value)}
                    required
                  />
                </li>
                <div className='regis-row'>
                <li>
                  <label htmlfor="picture"></label>
                  <select
                  className='challenge-select'
                    name="circuit"
                    id="circuit-select"
                    value={game}
                    onChange={(e) => setGame(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>Choose a challenge</option>
                    {fetchGame.map((game) =>
                      <option key={game.idgames} value={game.idgames}>{game.title}</option>
                    )}
                  </select>
                </li>
                <li>
                  <label htmlfor="registerTeam"></label>

                  <select
                    className="regisTeam"
                    name="registerTeam"
                    id="registerTeam"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>Choose a team</option>
                    <option value="Mars">Mars</option>
                    <option value="Wild">Wild</option>
                  </select>
                </li>
                </div>
                <li id="registerButton">
                  <input
                    type="submit"
                    id="regisJoinButton"
                    name="joinTrial"
                    alt="joinTrial"
                    value="Join"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Registration;
