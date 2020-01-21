import React, { Component } from 'react';
import './App.css';
import './components/FollowerCard.css';
import './components/UserCard.css';
import axios from "axios";
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';


class App extends Component {

  state= {
    followersList: [],
  }

  componentDidMount() {
    
    axios
        .get('https://api.github.com/users/aanderson9313/followers')
        .then((response) => {
          this.setState({followersList: response.data})
          console.log(this.state)
        }, [])
        .catch(err => console.log('error', err))
      

     axios
      .get('https://api.github.com/users/aanderson9313')
      .then(res => {
        console.log('obtaining user data', res);

        this.setState({
          img: res.data.avatar_url,
          name: res.data.name,
          followers: res.data.followers,
          url: res.data.html_url,
          login: res.data.login
        });

      }, [] )

      .catch(err => console.log('error on the fetch:', err));
  }


render() {


  return(
    <div className = "App">
        <div className = "userCard">
        <h1 className = "user-title">Github User:</h1>
        <UserCard className = "users"
        name = {this.state.name}
        img = {this.state.img}
        login = {this.state.login}
        followers = {this.state.followers}
        followersList = {this.state.followersList}
        />
      </div>
      <div className = "Followers-list">
        <h1 className = "followers-title">Github Followers:</h1>
        <div className = "followers">
          {this.state.followersList.map(item => (
            <FollowerCard 
            key = {item.id}
            img = {item.avatar_url}
            login = {item.login}
            
            />
          ))}
        </div>
      </div>
    </div>
  )
}

};

export default App;
