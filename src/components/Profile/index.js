import React from "react";
import "./index.css";
import Card from "../Card";
import cardData from "../../data/card";
import Table from "../Table";
import table1 from "../../data/table1";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="top-container">
        <h1 className="name">Hi, Jennie Moss</h1>
        <p className="time">Last scanned on March 20th, 2023 11:30 PM IST</p>
      </div>
      <div className="card-wrap">
        {cardData.map((eachData) => (
          <Card
            amount={eachData.amount}
            description={eachData.description}
            color={eachData.color}
          />
        ))}
      </div>
      <div>
        {table1.map((eachTable, i) => (
          <Table
            key={i}
            heading={eachTable.heading}
            tableHeader={eachTable.tableHeader}
            tableContent={eachTable.tableContent}
          />
        ))}
      </div>
    </div>
  );
}
