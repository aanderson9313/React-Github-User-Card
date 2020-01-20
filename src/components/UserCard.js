import React from 'react';

const UserCard = props => {

    return (
        <div className = "user-card">

            <img className = "user-img" src = {props.img} alt = "user"></img>
            <h2>{props.name}</h2>
            <span>Github Handle: </span>
            <a href = {props.url}> {props.login} </a>
            <p> Total Followers: {props.followers}</p>

        </div>
    )
}



export default UserCard;