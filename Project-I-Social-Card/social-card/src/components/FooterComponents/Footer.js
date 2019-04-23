import React from 'react';
import './Footer.css';



const Footer = ()=>{
    let tweetCount=0;
    let heartCount = 0;

    const updateTweetCount = () => {
        tweetCount++
        document.querySelector('.fa-retweet').textContent = tweetCount;
    
    }

    const updateHeartCount = () => {
        heartCount++
        document.querySelector('.fa-heart').textContent = heartCount;
    
    }
    return (
        <div className='footer'>
            
                <i className="far fa-comments"></i>
            
            
                <i className="fas fa-retweet" onClick = {updateTweetCount}>{tweetCount}</i>
            
            
                <i className="far fa-heart" onClick = {updateHeartCount}>{heartCount}</i>
            
            
                <i className="far fa-envelope"></i>
            
        </div>
    );
}

export default Footer