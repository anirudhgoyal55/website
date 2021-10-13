import React from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import { Button } from './Button';
import './daBody.css';


function WasGud() {
    let history = useHistory();
    const openMarketPage = () => {
        history.push('/MarketPage');
    };
    return (
        <div className='da-container'>
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted/> */}
            <h1>Welcome to TravelOne</h1>
            <p>Scroll Below to Check out our Selection
            </p>
            <div className="da-btns">
                <Button onClick={openMarketPage} className='btn1' buttonStyle='btn--outline'
                    buttonSize='btn--large'>Sign Up</Button>
                <Button onClick={openMarketPage} className='btn2' buttonStyle='btn--primary'
                    buttonSize='btn--large'>Buy Package</Button>

            </div>
        </div>
    )
}

export default WasGud;
