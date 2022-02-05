import React, { useEffect } from "react";
import { Bar } from "react-chartjs-3";

export default function CovidChart() {
  let chartReference = {};

  const data1 = {
    labels: ["I", "II", "III", "IV:A", "MIMAROPA", "IV:B", "V", "VI", "VII"],
    datasets: [
      {
        label: "Region I - Region VI",
        data: [900, 234, 500, 3247, 974, 134, 1345, 1245, 1],
        backgroundColor: "rgba(255,0,0,0.5)",
      },
    ],
  };

  const data2 = {
    labels: [
      "Region I",
      "Region II",
      "Region III",
      "Region IV:A",
      "MIMAROPA",
      "Region IV:B",
      "Region V",
      "Region VI",
    ],
    datasets: [
      {
        label: "Region VII - Region XIII",
        data: [90, 1234, 670, 447, 474, 5, 1345, 145],
        backgroundColor: "rgba(255,0,0,0.5)",
      },
    ],
  };

  return (
    <div className={`w-full`}>
      <div
        className={`w-full flex justify-center flex-col items-center mt-8 overflow-y-auto`}
      >
        <div
          className={`w-full laptop:w-3/5 h-full flex justify-center items-center cursor-pointer`}
        >
          <Bar ref={(reference) => (chartReference = reference)} data={data1} />
        </div>
        <div
          className={`w-full laptop:w-3/5 h-full flex justify-center items-center cursor-pointer`}
        >
          <Bar ref={(reference) => (chartReference = reference)} data={data2} />
        </div>
      </div>
    </div>
  );
}
