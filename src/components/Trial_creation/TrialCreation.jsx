import React, { useState } from "react";
import "./trialCreation.css";
import axios from "axios";

const TrialCreation = () => {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const postGame = async () => {
    const newGame = axios
      .post("/api/games", {
        title: title,
        place: place,
        image: image,
        description: description,
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <div className="creation_background">
        <div className="creationSignupSection">
          <form
            className="creationSignupForm"
            name="signupform"
            onSubmit={postGame}
          >
            <h2 className="creationTitle">Add a trial</h2>
            <ul className="creationNoBullet">
              <li>
                <label htmlfor="trialTitle"></label>
                <input
                  type="text"
                  className="creationInputFields"
                  id="trialTitle"
                  name="trialTitle"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </li>
              <li>
                <label htmlfor="trialPlace"></label>
                <input
                  type="text"
                  className="creationInputFields"
                  id="trialPlace"
                  name="trialPlace"
                  placeholder="Place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  required
                />
              </li>
              <li>
                <label htmlfor="trialPicture"></label>
                <input
                  type="text"
                  className="creationInputFields"
                  id="trialPicture"
                  name="trialPicture"
                  placeholder="Picture url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </li>
              <li>
                <label htmlfor="trialDescription"></label>
                <textarea
                  type="text"
                  className="creationInputFields"
                  id="trialDescription"
                  name="trialDescription"
                  placeholder="Description"
                  maxLength="100"
                  cols="30"
                  rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </li>

              <li id="creationButton">
                <input
                  type="submit"
                  id="creationJoinButton"
                  name="createTrial"
                  alt="createTrial"
                  value="Create a Trial"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default TrialCreation;
