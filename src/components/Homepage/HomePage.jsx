import React from "react";
import './HomePage.css';
import { Link } from 'react-router-dom'



const HomePage = () => {

    return (
        <>
        <div className="HomePage">
            <div className='title'>
                <h1 className='tracking-in-expand'>Mars VS Wild</h1>
            </div>
            <div className='tracking'>
            <h2>Two teams, only one will succeed.<br />Their goal? Face one another in battles and become the ultimate winner.<br/> Who will it be?</h2>
            </div>
            <div className='start-button'>
            <Link to='/trialcreation'>Trial Creation</Link>
            </div>
            <div id="background-wrap">
            <div class="bubble x1"></div>
            <div class="bubble x2"></div>
            <div class="bubble x3"></div>
            <div class="bubble x4"></div>
            <div class="bubble x5"></div>
            <div class="bubble x6"></div>
            <div class="bubble x7"></div>
            <div class="bubble x8"></div>
            <div class="bubble x9"></div>
            <div class="bubble x10"></div>
</div>
  
        </div>
        </>
    )
}

export default HomePage;



