import React from "react";
import { Footer } from "../Footer";
import "./registration.css";

const Registration = () => {
  return (
    <>
      <div className="registration_background">
        <div className="regisSignupSection">
          <form
            action="#"
            method="POST"
            className="regisSignupForm"
            name="signupform"
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
                  required
                />
              </li>
              <li>
                <label for="picture"></label>
                <select name="circuit" id="circuit-select" required>
                  <option value="">--</option>
                  <option value="trial1">Trial 1</option>
                  <option value="trial2">Trial 2</option>
                  <option value="trial3">Trial 3</option>
                  <option value="trial4">Trial 4</option>
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
