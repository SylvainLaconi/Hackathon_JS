import React from 'react'
import './trialCreation.css'

const TrialCreation = () => {
    return (
        <>
            <div className="creation_background">
                <div className="creationSignupSection">
                    <form
                        action="#"
                        method="POST"
                        className="creationSignupForm"
                        name="signupform"
                    >
                        <h2 className="creationTitle">Add a trial</h2>
                        <ul className="creationNoBullet">
                            <li>
                                <label for="trialTitle"></label>
                                <input
                                    type="text"
                                    className="creationInputFields"
                                    id="trialTitle"
                                    name="trialTitle"
                                    placeholder="Title"
                                    required
                                />
                            </li>
                            <li>
                                <label for="trialPlace"></label>
                                <input
                                    type="text"
                                    className="creationInputFields"
                                    id="trialPlace"
                                    name="trialPlace"
                                    placeholder="Place"
                                    required
                                />
                            </li>
                            <li>
                                <label for="trialPicture"></label>
                                <input
                                    type="text"
                                    className="creationInputFields"
                                    id="trialPicture"
                                    name="trialPicture"
                                    placeholder="Picture url"
                                    required
                                />
                            </li>
                            <li>
                                <label for="trialDescription"></label>
                                <textarea
                                    type="text"
                                    className="creationInputFields"
                                    id="trialDescription"
                                    name="trialDescription"
                                    placeholder="Description"
                                    maxLength="100"
                                    cols="30"
                                    rows="5"
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
    )
}

export default TrialCreation
