import React from 'react'; 


const FollowerCard = props => {
    
    return (

        <div className = "follower-card">
            <img src = {props.img} width="100px" height="100px" alt = "follower"/>
            <p> 
                <a href = {props.url}> {props.login} </a>
            </p>
        </div>
    )
}

export default FollowerCard;