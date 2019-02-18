import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div class="grid-container">
            <h1 className="title grid-item grid-title">Gym Buddy</h1>
            <p className="subtitle grid-item">Track your workout</p>
            <p className="subtitle grid-item">See your progress</p>
            <p className="subtitle grid-item">View the workout library</p>
            <Link to="/library">
              <button className="get-started grid-item">GET STARTED!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
