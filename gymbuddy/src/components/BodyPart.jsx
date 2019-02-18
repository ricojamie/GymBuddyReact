import React, { Component } from 'react';
import chest from '../images/chest.png';
import legs from '../images/legs.png';
import biceps from '../images/biceps.png';
import shoulders from '../images/shoulders.png';
import triceps from '../images/triceps.png';
import back from '../images/back.png';
import abs from '../images/abs.png';

class BodyPart extends Component {
  render() {
    return (
      <div className="App">
        <div class="grid-container-library">
          {/* Chest Item */}
          <div className="grid-item item1">
            <h1 className="exercise-title">Chest</h1>
            <img className="exercise-image" src={chest} alt="chest" />
            <p>Click here to view our library of chest exercises</p>
          </div>
          {/* Back Item */}
          <div className="grid-item item2">
            <h1 className="exercise-title">Back</h1>
            <img className="exercise-image" src={back} alt="back" />
            <p>Click here to view our library of back exercises</p>
          </div>
          {/* Biceps Item */}
          <div className="grid-item item3">
            <h1 className="exercise-title">Biceps</h1>
            <img className="exercise-image" src={biceps} alt="biceps" />
            <p>Click here to view our library of bicep exercises</p>
          </div>
          {/* Triceps Item */}
          <div className="grid-item item4">
            <h1 className="exercise-title">Triceps</h1>
            <img className="exercise-image" src={triceps} alt="triceps" />
            <p>Click here to view our library of tricep exercises</p>
          </div>
          {/* Shoulders Item */}
          <div className="grid-item item5">
            <h1 className="exercise-title">Shoulders</h1>
            <img className="exercise-image" src={shoulders} alt="shoulders" />
            <p>Click here to view our library of shoulder exercises</p>
          </div>
          {/* Legs Item */}
          <div className="grid-item item6">
            <h1 className="exercise-title">Legs</h1>
            <img className="exercise-image" src={legs} alt="legs" />
            <p>Click here to view our library of leg exercises</p>
          </div>
          {/* Abs Item */}
          <div className="grid-item item7">
            <h1 className="exercise-title">Abs</h1>
            <img className="exercise-image" src={abs} alt="abs" />
            <p>Click here to view our library of abs exercises</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyPart;
