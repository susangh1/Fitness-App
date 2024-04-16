import React from "react";
import "./Secondfeature.css";
import images from "../../../constants/images";
import { Fade, Bounce, JackInTheBox, Zoom } from "react-awesome-reveal";
const Secondfeature = () => {
  return (
    <div>
      <div className="second-feature container">
        <div className="row">
          <div className="col-md-6 smart-training-text">
            <h2>
              Train smarter, <br /> get stronger.
            </h2>
          
                
                <Fade>
                  <Zoom>
                  <p>
                    Fitness Pro helps track your workouts,
                    <br /> get better results, and be the best <br /> version of
                    you. Less thinking, more lifting 🔥🏀
                  </p>
                  </Zoom>
                  </Fade>
              
          
            <div className="trial-button">
              <button>Start free trial</button>
            </div>
          </div>
          <div className="col-md-6 smart-training-image">
            <JackInTheBox>
              <div className="bottles-image">
                <img src={images.bottle} alt="bottle image" />
              </div>
            </JackInTheBox>
            <JackInTheBox>
              <div className="gloves-image">
                <img src={images.gloves} alt="gloves image" />
              </div>
            </JackInTheBox>
            <Zoom>
            <div className="bag-image">
              <img src={images.bag} alt="bag image" />
            </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondfeature;
