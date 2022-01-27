import React from "react";
import ResultForm from "./ResultForm";

function HomeTestResultForm() {
  const handleSubmit = () => alert(`submitted!`);
  return (
    <div
      className={`w-4/5 h-full flex flex-col justify-center items-center m-auto`}
    >
      <ResultForm />
      <button
        className={
          "tracking-widest bg-teal-900 px-6 py-2 mt-4 rounded font-bold text-white cursoir-pointer mb-8"
        }
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default HomeTestResultForm;
