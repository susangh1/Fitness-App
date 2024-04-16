import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import KeyIcon from "@mui/icons-material/Key";
import "./Howitworks.css";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { Fade } from "@mui/material";

const Howitworks = () => {
  return (
    <div>
      <div className="how-it-works container">
        <h2>How it works</h2>
        <p>
          Stacks is a production-ready library of stackable <br /> content
          blocks built in React Native.
        </p>

        <div className="row download-trainer-icons ">
          <div className="download-section col-md-3">
            <div className="stack">
              <DownloadIcon />
            </div>
            <h3>Step 1</h3>
            <h4>Download</h4>
            <p>
              Fitness Pro tracks your workouts, get <br /> better results, and
              be the best <br /> version of you.
            </p>
          </div>

          <div className="keys-section col-md-3">
            <div className="stack keys">
              <KeyIcon />
            </div>
            <h3>Step 2</h3>
            <h4>Choose your trainner</h4>
            <p>
              Fitness Pro tracks your workouts, get <br /> better results, and
              be the best <br /> version of you.
            </p>
          </div>

          <div className="goals-section col-md-3">
            <div className="stack goals">
              <CrisisAlertIcon />
            </div>
            <h3>Step 3</h3>
            <h4>Set the goals</h4>
            <p>
              Fitness Pro tracks your workouts, get <br /> better results, and
              be the best <br /> version of you.
            </p>
          </div>

          <div className="timer-section col-md-3">
            <div className="stack timer">
              <AvTimerIcon />
            </div>
            <h3>Step 4</h3>
            <h4>Workout time</h4>
            <p>
              Fitness Pro tracks your workouts, get <br /> better results, and
              be the best <br /> version of you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
