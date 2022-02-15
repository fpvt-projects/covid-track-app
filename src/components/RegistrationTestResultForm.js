import React from "react";
import ResultForm from "./ResultForm";

function TestResultForm({
  toggleResultForm,
  antigenType,
  brand,
  result,
  inputAntigenType,
  inputBrand,
  inputResult,
}) {
  return (
    <div className={`w-full ${toggleResultForm ? "block" : "hidden"} `}>
      <ResultForm
        antigenType={antigenType}
        brand={brand}
        result={result}
        inputAntigenType={inputAntigenType}
        inputBrand={inputBrand}
        inputResult={inputResult}
      />
    </div>
  );
}

export default TestResultForm;
