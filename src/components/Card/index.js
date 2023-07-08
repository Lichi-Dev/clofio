import React from "react";
import "./index.css";

export default function Card(props) {
  const { amount, description, color } = props;
  return (
    <div className="card-container" style={{ backgroundColor: `${color}` }}>
      <h1 className="card-heading">{amount}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
}
