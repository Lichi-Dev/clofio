import Button from "../components/Button";

const table1 = [
  {
    heading: "Buckets you own",
    tableHeader: ["Name", "Budget", "Speed", "Forecast"],
    tableContent: [
      ["ACME Corp", "$ 200,000", "$ 173,762", "$ 205,049"],
      ["Raman Inc", "$ 200,000", "$ 124,762", "$ 292,629"],
    ],
  },
  {
    heading: "Approvals assigned to you",
    tableHeader: [
      "Bucket Name",
      "Current Budget",
      "Requested budget",
      "Requested By",
      "",
    ],
    tableContent: [
      [
        "ACME Corp",
        "$ 200,000",
        "$ 250,000",
        "Joe Hilfinger",
        <div>
          <Button text="Approve" />
          <Button text="Reject" />
        </div>,
      ],
    ],
  },
  {
    heading: "Buckets you are memeber of",
    tableHeader: ["Name", "Budget", "Spend", "Forcast"],
    tableContent: [["Longate", "$ 200,000", "$ 173,762", "$ 205,049"]],
  },
];

export default table1;
