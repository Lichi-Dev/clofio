import React from "react";
import "./index.css";

export default function Button(props) {
  const { text } = props;
  return <button className="custom-button">{text}</button>;
}
