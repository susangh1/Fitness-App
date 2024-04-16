import React from "react";
import images from "../../../constants/images";
import "./firstfeature.css";
import { JackInTheBox, Rotate, Slide, Zoom } from "react-awesome-reveal";

const firstfeature = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="feature-text col-md-6 mt-5">
            <h2>TRAIN SMARTER, GET STRONGER</h2>
            <h3>
              Simple fitness <br /> experience for <br /> everyone.
            </h3>
            <p>
              Track your workouts, get better results, and be the <br />{" "}
              bestversion of you. Less thinking, more lifting.
            </p>
            <div className="download-book-buttons d-flex">
              <div className="download-button">
                <button>Download App</button>
              </div>
              <div className="book-button">
                <button>Book a Class</button>
              </div>
            </div>
          </div>
          <div className="feature-image col-md-6 mt-3">
            <Zoom delay={100}>
              <div className="watch-image">
                <img src={images.watch} alt="watch logo" />
              </div>
            </Zoom>
            <Zoom delay={100}>
              <div className="ball-image">
                <img src={images.ball} alt="ball-image" />
              </div>
            </Zoom>

            <Zoom delay={200}>
              <div className="blackball-image">
                <img src={images.blackball} alt="blackball-image" />
              </div>
            </Zoom>

            <Zoom>
              <div className="bottle-image">
                <img src={images.bottle} alt="bottle-image" />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default firstfeature;
