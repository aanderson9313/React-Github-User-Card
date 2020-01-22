import React from 'react'; 


const FollowerCard = props => {
    
    return (
        <div className = "Follower-card">
        <div className = "follower">
            <img src = {props.img}  alt = "follower"/>
            <p> 
                <a href = {props.url}> {props.login} </a>
            </p>
        </div>
        </div> 
    )
}

export default FollowerCard;