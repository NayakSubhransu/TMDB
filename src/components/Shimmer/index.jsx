import React from "react";
import "./index.css";

const Shimmer = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default Shimmer;
