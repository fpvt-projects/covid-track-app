import React, { useState } from "react";
import RegistrationTestResultForm from "./RegistrationTestResultForm";

function AccountDetailsForm() {
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [toggleResultForm, setToggleResultForm] = useState(false);

  const handleInputEmail = (e) => setEmail(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);
  const handleInputPasswordConfirmation = (e) =>
    setPasswordConfirmation(e.target.value);
  const handleInputLastname = (e) => setLastName(e.target.value);
  const handleInputFirstname = (e) => setFirstName(e.target.value);
  const handleInputMiddlename = (e) => setMiddleName(e.target.value);
  const handleInputHouseNumber = (e) => setHouseNumber(e.target.value);
  const handleInputCity = (e) => setCity(e.target.value);
  const showResultForm = () => setToggleResultForm(!toggleResultForm);

  const handleSubmit = () => {
    if (email === "") {
      setError("Please input a valid email.");
    } else if (password === "" || password_confirmation === "") {
      setError("Please input a valid password.");
    } else if (password !== password_confirmation) {
      setError("Please confirm your password.");
    } else if (lastname === "" || firstname === "" || middlename === "") {
      setError("Please input a complete name.");
    } else if (houseNumber === "" || city === "") {
      setError("Please input a valid address.");
    } else {
      alert("Successfully registered!");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      setLastName("");
      setFirstName("");
      setMiddleName("");
      setHouseNumber("");
      setCity("");
    }
  };

  return (
    <div
      className={
        "w-full bg-white pt-4 pb-24 laptop:pb-0 px-12 laptop:w-3/4 tablet:w-1/2 select-none"
      }
    >
      <h1 className={"text-center font-bold text-4xl font-sans"}>
        COVID TRACKER
      </h1>
      <p className={"text-center tracking-widest "}>
        ** covid tracker registration and test result form **
      </p>

      <p className={"italic mt-4"}>Account Information.</p>

      {/* User login information : Email & Password */}
      <div className={"w-full flex flex-col laptop:flex-row"}>
        <div className={"w-full"}>
          <p className={"font-semibold mt-2"}>Email:</p>
          <input // Email
            className={`border ${
              error === "Please input a valid email."
                ? "border-red-500"
                : "border-black"
            } pl-2 outline-none w-full h-8`}
            type="text"
            value={email}
            onChange={handleInputEmail}
            placeholder="useremail@gmail.com"
          />
        </div>
        <div className={"flex flex-col laptop:flex-row w-full"}>
          <div className={"w-full"}>
            <p className={"font-semibold mt-2"}>Password:</p>
            <input // Password
              className={`border ${
                error === "Please input a valid password." ||
                error === "Please confirm your password."
                  ? "border-red-500"
                  : "border-black"
              } pl-2 outline-none w-full h-8`}
              type="password"
              value={password}
              onChange={handleInputPassword}
              placeholder="••••••••"
            />
          </div>
          <div className={"w-full"}>
            <p className={"font-semibold mt-2 whitespace-nowrap"}>
              Confirm Password:
            </p>
            <input //Password confirmation
              className={`border ${
                error === "Please input a valid password." ||
                error === "Please confirm your password."
                  ? "border-red-500"
                  : "border-black"
              } pl-2 outline-none w-full h-8`}
              type="password"
              value={password_confirmation}
              onChange={handleInputPasswordConfirmation}
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      {/* User full name : Lastname, Firstname, Middlename */}
      <p className={"font-semibold mt-2"}>Full name:</p>
      <div className={`w-full flex flex-col laptop:flex-row`}>
        <input // Lastname
          className={`border ${
            error === "Please input a complete name."
              ? "border-red-500"
              : "border-black"
          } pl-2 outline-none w-full mt-4 laptop:mt-0 h-8`}
          type="text"
          value={lastname}
          onChange={handleInputLastname}
          placeholder="Lastname"
        />
        <input // Firstname
          className={`border ${
            error === "Please input a complete name."
              ? "border-red-500"
              : "border-black"
          } pl-2 outline-none w-full mt-4 laptop:mt-0 h-8`}
          type="text"
          value={firstname}
          onChange={handleInputFirstname}
          placeholder="Firstname"
        />
        <input // Middlename
          className={`border ${
            error === "Please input a complete name."
              ? "border-red-500"
              : "border-black"
          } pl-2 outline-none w-full mt-4 laptop:mt-0 h-8`}
          type="text"
          value={middlename}
          onChange={handleInputMiddlename}
          placeholder="Middlename"
        />
      </div>

      {/* User address : House number & City  */}
      <p className="font-semibold mt-2">Address:</p>
      <div className={`w-full flex flex-col laptop:flex-row`}>
        <input // House number
          className={`border ${
            error === "Please input a valid address."
              ? "border-red-500"
              : "border-black"
          } pl-2 outline-none w-full mt-4 laptop:mt-0 h-8`}
          type="text"
          value={houseNumber}
          onChange={handleInputHouseNumber}
          placeholder="Building / Street / House Number"
        />
        <input // City
          className={`border ${
            error === "Please input a valid address."
              ? "border-red-500"
              : "border-black"
          } pl-2 outline-none w-full mt-4 laptop:mt-0 h-8`}
          type="text"
          value={city}
          onChange={handleInputCity}
          placeholder="City"
        />
      </div>

      {/* Birthdate , Age, & Contact number */}
      <div className={"w-full flex flex-col laptop:flex-row"}>
        <div className={"flex flex-col laptop:flex-row w-full"}>
          <div className={"w-full"}>
            <p className={"font-semibold mt-2"}>Birthdate:</p>
            <input // Birthdate
              className={"border border-black pl-2 outline-none w-full h-8"}
              type="date"
            />
          </div>
          <div className={"w-full"}>
            <p className={"font-semibold mt-2 whitespace-nowrap"}>Age:</p>
            <input // Age
              className={"border border-black pl-2 outline-none w-full h-8"}
              type="text"
              placeholder="24"
            />
          </div>
        </div>
        <div className={"w-full"}>
          <p className={"font-semibold mt-2"}>Contact Number:</p>
          <input // Contact number
            className={"border border-black pl-2 outline-none w-full h-8"}
            type="text"
            placeholder="09123456789"
          />
        </div>
      </div>

      <p className={"font-semibold mt-2"}>Gender:</p>
      <div className={"w-full laptop:w-1/2"}>
        <div className={"w-full laptop:w-1/2 flex justify-around"}>
          <div>
            <input // Gender Male
              className={"mr-2 cursor-pointer"}
              type="radio"
              value="male"
              name="gender"
            />
            Male
          </div>
          <div>
            <input // Gender Female
              className={"mr-2 cursor-pointer"}
              type="radio"
              value="female"
              name="gender"
            />
            Female
          </div>
        </div>
      </div>

      <hr className={"my-4 border border-t-black"} />

      <button
        className={"w-full text-xs font-semibold"}
        onClick={showResultForm}
      >
        {toggleResultForm
          ? "Click here to close result form."
          : "Click here to input test result."}
      </button>

      <RegistrationTestResultForm toggleResultForm={toggleResultForm} />

      <h1 className={"text-red-600 text-center font-semibold my-4"}>{error}</h1>

      <div className={"mt-8 flex justify-around"}>
        <button
          className={
            "tracking-widest bg-teal-900 px-6 py-2 rounded font-bold text-white cursoir-pointer mb-8"
          }
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default AccountDetailsForm;
