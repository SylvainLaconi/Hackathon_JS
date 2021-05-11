import React from "react";
import styles from "./TrialCard.module.sass"

export default function TrialCard({title, place, image, description}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                    <div className={styles.info}>
                        <h1>Mountain</h1>
                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        <button>Read More</button>
                    </div>
            </div>
        </div>
    )
}

/*<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Syrtis_Major_MC-13.jpg/1024px-Syrtis_Major_MC-13.jpg"/>*/