import React from "react";
import Counter from "./Counter";
import ThemeChanger from "./ThemeChanger";

const Home = () => {
  return (
    <div>
      <h1 className="bg-primary">Home page</h1>
      <button className="btn btn-primary">click</button>
      <Counter />
      <ThemeChanger />

      <div className="parent">
        <div className="child1">fist div</div>
        <div className="child2"> second div</div>
        <div className="child2"> third div</div>
      </div>
    </div>
  );
};

export default Home;
