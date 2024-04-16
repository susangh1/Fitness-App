import React from "react";
import Firstfeature from "../Features/firstfeature/firstfeature";
import Secondfeature from "../Features/Secondfeature/Secondfeature";
import Dropdownarrow from "../Dropdownarrow/Dropdownarrow";
import Howitworks from "../Howitworks/Howitworks";
import Thirdfeature from "../Features/Thirdfeature/Thirdfeature";
const Home = () => {
  return (
    <div>
      <Firstfeature />
      <div className="container">
        <Dropdownarrow />
      </div>
      <Howitworks />
      <Secondfeature />
      <Thirdfeature/>
    </div>
  );
};

export default Home;
