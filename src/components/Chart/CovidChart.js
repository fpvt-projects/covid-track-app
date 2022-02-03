import React, { useEffect } from "react";
import { Bar } from "react-chartjs-3";

export default function CovidChart() {
  let chartReference = {};

  const data = {
    labels: [
      "RegionA",
      "RegionB",
      "RegionC",
      "RegionD",
      "RegionD",
      "RegionE",
      "RegionF",
      "RegionG",
    ],
    datasets: [
      {
        label: "Covid Cases per region",
        data: [900, 234, 500, 247, 974, 134, 1345, 1245],
        backgroundColor: "red",
      },
    ],
  };
  return (
    <div className={`w-full h-full flex justify-center items-center`}>
      <Bar ref={(reference) => (chartReference = reference)} data={data} />
    </div>
  );
}
