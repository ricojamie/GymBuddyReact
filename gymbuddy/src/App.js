import React, { Component } from 'react';
import './App.css';

import BodyPart from './Components/BodyPart';
import Main from './Components/Main';

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/library" component={BodyPart} />
        </div>
      </Router>
    );
  }
}

export default App;