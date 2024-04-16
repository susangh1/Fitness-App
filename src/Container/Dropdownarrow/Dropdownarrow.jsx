import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import * as classes from "./Dropdownarrow.module.css";

const Dropdownarrow = () => {
  return (
    <div className={classes.ArrowDown}>
      <ArrowDownwardIcon className={classes.ArrowIcon} />
    </div>
  );
};

export default Dropdownarrow;
