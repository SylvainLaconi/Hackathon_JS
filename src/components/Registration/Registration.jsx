import React, { useState } from "react";
import { Footer } from "../Footer";
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

  const newPlayer = axios
    .post("/api/players", {
      name: name,
      species: species,
      planet: planet,
      photo: photo,
      playerDescription: playerDescription,
      team: team,
      games_idgames: game,
    })
    .then((res) => console.log(res));

  console.log(name);
  console.log(species);
  console.log(planet);
  console.log(photo);
  console.log(playerDescription);
  console.log(team);
  console.log(game);

  return (
    <>
      <div className="registration_background">
        <div className="regisSignupSection">
          <form
            action="#"
            method="POST"
            className="regisSignupForm"
            name="signupform"
            onSubmit={newPlayer}
          >
            <h2>Sign Up</h2>
            <ul className="regisNoBullet">
              <li>
                <label for="player"></label>
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
                <label for="species"></label>
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
                <label for="planet"></label>
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
                <label for="picture"></label>
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
                <label for="description"></label>
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
              <li>
                <label for="picture"></label>
                <select
                  name="circuit"
                  id="circuit-select"
                  value={game}
                  onChange={(e) => setGame(e.target.value)}
                  required
                >
                  <option value="">--</option>
                  <option value="1">Trial 1</option>
                  <option value="2">Trial 2</option>
                  <option value="3">Trial 3</option>
                  <option value="4">Trial 4</option>
                  <option value="5">Trial 5</option>
                  <option value="6">Trial 6</option>
                  <option value="7">Trial 7</option>
                </select>
              </li>
              <div className="registrationTeam" required>
                <li>
                  <input
                    className="registrationRadio"
                    type="radio"
                    id="playerTeam"
                    name="playerTeam"
                    value="mars"
                    required
                  />
                  <label for="playerTeam">Mars</label>
                </li>
                <li>
                  <input
                    type="radio"
                    className="registrationRadio"
                    id="playerTeam"
                    name="playerTeam"
                    value="wild"
                    required
                  />
                  <label for="playerTeam">Wild</label>
                </li>
              </div>

              <li id="center-btn">
                <input
                  type="submit"
                  id="regisJoinButton"
                  name="join"
                  alt="Join"
                  value="Join"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
