import React from "react";
import "./registration.css";

const Registration = () => {


  return (
    <>
      <div className="registration_background">
        <div className="regisSignupSection">
          <form action="#" className="regisSignupForm" name="signupform">
            <h2 className="regisTitle">Sign Up</h2>
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
                <label for="registerTrial"></label>
                <select name="registerTrial" id="registerTrial" required>
                  <option value="">--</option>
                  <option value="trial1">Trial 1</option>
                  <option value="trial2">Trial 2</option>
                  <option value="trial3">Trial 3</option>
                  <option value="trial4">Trial 4</option>
                </select>
              </li>

              <li>
                <label for="registerTeam"></label>
                <select className="regisTeam" name="registerTeam" id="registerTeam" required>
                  <option value="">--</option>
                  <option value="Mars">Mars</option>
                  <option value="Wild">Wild</option>
                </select>
              </li>
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
};

export default Registration;
