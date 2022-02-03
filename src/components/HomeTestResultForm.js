import React from "react";
import ResultForm from "./ResultForm";

function HomeTestResultForm() {
  const handleSubmit = () => alert(`submitted!`);
  return (
    <div
      className={`w-full h-full flex justify-center items-center 
      bg-[url('https://wallpaperaccess.com/full/3551739.jpg')]
       bg-cover`}
    >
      <div
        className={`h-auto w-4/5  laptop:w-1/3 px-8 py-12 flex flex-col justify-center items-center m-auto bg-white shadow-lg rounded`}
      >
        <ResultForm />
        <button
          className={
            "tracking-widest bg-teal-900 px-6 py-2 mt-4 rounded font-bold text-white cursoir-pointer mb-8 select-none"
          }
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default HomeTestResultForm;
