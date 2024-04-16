import React from "react";
import "./Thirdfeature.css";
import {  Zoom } from "react-awesome-reveal";
const Thirdfeature = () => {
  return (
    <div>
      <div className="tracker container ">
        <h2>NEW WORKOUTS ADDED EVERY WEEK</h2>
        <h3>
          A new fitness experience for <br /> everyone
        </h3>
        <Zoom>
        <div className="row">
          <div className="calories-tracker col-md-4">
            <div className="tracker-icon">
              <span class="material-symbols-outlined">aod_watch</span>
              <h4>
                Keep track of calories and <br /> macros
              </h4>
              <p>
                Fitness Pro helps track your workouts,
                <br /> get better results, and be the best <br /> version of
                you. Less thinking!
              </p>
            </div>
          </div>
          <div className="col-md-4 premium-section">
            <span class="material-symbols-outlined">sports_baseball</span>
            <h4>
              Access all premium class of <br /> Fitness Pro
            </h4>
            <p>
              Fitness Pro helps track your <br /> workouts, get better results,
              and be <br /> the best version of you. Less thinking!
            </p>
          </div>
          <div className="col-md-4 second-tracker">
            <div className="tracker-icon">
              <span class="material-symbols-outlined">pace</span>
              <h4>
                Keep track of calories and <br /> macros
              </h4>
              <p>
                Fitness Pro helps track your workouts,
                <br /> get better results, and be the best <br /> version of
                you. Less thinking!
              </p>
            </div>
          </div>
        </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Thirdfeature;
