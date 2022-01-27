import React from "react";
import ResultForm from "./ResultForm";

function TestResultForm({ toggleResultForm }) {
  return (
    <div className={`w-full ${toggleResultForm ? "block" : "hidden"} `}>
      <ResultForm />
    </div>
  );
}

export default TestResultForm;
