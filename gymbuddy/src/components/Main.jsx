import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';


class Main extends Component {
  render() {
    return (
        <div className="App">
          <div>
              <h1 className="title">Gym Buddy</h1>
              <p className="subtitle">Track your workout</p>
              <p className="subtitle">See your progress</p>
              <p className="subtitle">View the workout library</p>
              <Link to='/library'><button className="get-started">GET STARTED!</button></Link>
          </div>   
        </div>
     
    );
  }
}



export default Main;