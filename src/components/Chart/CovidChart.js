import React from "react";
import { Bar } from "react-chartjs-3";

export default function CovidChart() {
  let chartReference = {};

  const data1 = {
    labels: ["I", "II", "III", "IV:A", "MIMAROPA", "V", "VI", "VII"],
    datasets: [
      {
        label: "Region I - Region VI",
        data: [900, 234, 500, 123, 974, 134, 1345, 1245],
        backgroundColor: "rgba(30, 41, 59,0.9)",
      },
    ],
  };

  const data2 = {
    labels: ["VIII", "IX", "X", "XI", "XII", "NCR", "CAR", "BARMM"],
    datasets: [
      {
        label: "Region VIII - BARMM",
        data: [90, 1234, 670, 447, 474, 3247, 1345, 145],
        backgroundColor: "rgba(30, 41, 59,0.9)",
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
