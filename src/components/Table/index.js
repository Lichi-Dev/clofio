import React from "react";
import "./index.css";

export default function Table(props) {
  const { heading, tableHeader, tableContent } = props;
  return (
    <div className="table-contaniner">
      <h1 className="table-main-heading">{heading}</h1>
      <table className="table" style={{ marginBottom: 20 }}>
        <tr>
          <td colspan={heading.length}>
            <hr className="line" />
          </td>
        </tr>
        <tr className="table-header-container">
          {tableHeader.map((item) => (
            <th className="table-header">{item}</th>
          ))}
        </tr>
        <tr>
          <td colspan={heading.length}>
            <hr className="line" />
          </td>
        </tr>
        {tableContent.map((item) => (
          <tr>
            {item.map((eachItem) => (
              <td>{eachItem}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
