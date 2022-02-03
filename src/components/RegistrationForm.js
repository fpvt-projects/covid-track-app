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
  const [region, setRegion] = useState("");
  const [toggleResultForm, setToggleResultForm] = useState(false);

  const handleInputEmail = (e) => setEmail(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);
  const handleInputPasswordConfirmation = (e) =>
    setPasswordConfirmation(e.target.value);
  const handleInputLastname = (e) => setLastName(e.target.value);
  const handleInputFirstname = (e) => setFirstName(e.target.value);
  const handleInputMiddlename = (e) => setMiddleName(e.target.value);
  const handleInputHouseNumber = (e) => setHouseNumber(e.target.value);
  const handleInputRegion = (e) => setRegion(e.target.value);
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
    } else if (houseNumber === "" || ServiceWorkerRegistration === "") {
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
      setRegion("");
    }
  };

  return (
    <div
      className={
        "w-full bg-white pt-4 pb-24 laptop:pb-0 px-8 laptop:px-12 laptop:w-1/3 tablet:w-1/2 select-none shadow-xl"
      }
    >
      <h1 className={"text-center font-bold text-4xl font-sans"}>
        COVID TRACKER
      </h1>
      <p className={"text-center tracking-widest "}>
        ** covid tracker registration and test result form **
      </p>

      <p className={"italic my-4"}>Account Information.</p>

      {/* User login information : Email & Password */}
      <div className={"w-full flex flex-col"}>
        <p className="font-semibold ">Login information:</p>
        <div
          className={`w-full h-12 border  mb-2  ${
            error === "Please input a valid email."
              ? "border-red-500"
              : "border-black"
          } rounded`}
        >
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>Email</h1>
          <input // Email
            className={`pl-2 outline-none w-full `}
            type="text"
            value={email}
            onChange={handleInputEmail}
          />
        </div>
        <div
          className={`w-full h-12 border mb-2 ${
            error === "Please input a valid password." ||
            error === "Please confirm your password."
              ? "border-red-500"
              : "border-black"
          } rounded`}
        >
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>Password</h1>
          <input // password
            className={` pl-2 outline-none w-4/5`}
            type="password"
            value={password}
            placeholder="••••••••"
            onChange={handleInputPassword}
          />
        </div>
        <div
          className={`w-full h-12 border ${
            error === "Please input a valid password." ||
            error === "Please confirm your password."
              ? "border-red-500"
              : "border-black"
          } rounded`}
        >
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Password Confirmation
          </h1>
          <input // password confirmation
            className={` pl-2 outline-none w-4/5`}
            type="password"
            value={password_confirmation}
            placeholder="••••••••"
            onChange={handleInputPasswordConfirmation}
          />
        </div>
      </div>

      {/* User full name : Lastname, Firstname, Middlename */}
      <p className={"font-semibold mt-4"}>Full name:</p>
      <div className={`w-full flex flex-col`}>
        <div
          className={`w-full h-12 border mb-2 ${
            error === "Please input a complete name."
              ? "border-red-500"
              : "border-black"
          } rounded`}
        >
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>Lastname</h1>
          <input // Lastname
            className={`pl-2 outline-none w-full`}
            type="text"
            value={lastname}
            onChange={handleInputLastname}
          />
        </div>
        <div
          className={`w-full h-12 border mb-2 ${
            error === "Please input a complete name."
              ? "border-red-500"
              : "border-black"
          } rounded`}
        >
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Firstname
          </h1>
          <input // Firstname
            className={`pl-2 outline-none w-full`}
            type="text"
            value={firstname}
            onChange={handleInputFirstname}
          />
        </div>
        <div
          className={`w-full h-12 border ${
            error === "Please input a complete name."
              ? "border-red-500"
              : "border-black"
          } rounded`}
        >
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Middlename
          </h1>
          <input // Middlename
            className={`pl-2 outline-none w-full`}
            type="text"
            value={middlename}
            onChange={handleInputMiddlename}
          />
        </div>
      </div>

      {/* User address : House number & City  */}
      <p className="font-semibold mt-4 ">Address:</p>
      <div className={`w-full flex flex-col`}>
        <div
          className={`w-full h-12 border mb-2 ${
            error === "Please input a valid address."
              ? "border-red-500"
              : "border-black"
          } rounded`}
        >
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Building / Street / House number / City
          </h1>
          <input // Addrss
            className={`pl-2 outline-none w-full`}
            type="text"
            value={houseNumber}
            onChange={handleInputHouseNumber}
          />
        </div>
        <div
          className={`w-full h-12 border mb-2 ${
            error === "Please input a valid address."
              ? "border-red-500"
              : "border-black"
          } rounded`}
        >
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>Region</h1>
          <select
            className={`w-full cursor-pointer outline-none`}
            value={region}
            onChange={handleInputRegion}
          >
            <option value={null}>-- Please select a region --</option>
            <option value="Region I - Ilocos Region">
              Region I - Ilocos Region
            </option>
            <option value="Region II - Cagayan Valley">
              Region II - Cagayan Valley
            </option>
            <option value="Region III - Central Luzon">
              Region III - Central Luzon
            </option>
            <option value="Region IV:A - CALABARZON">
              Region IV:A - CALABARZON
            </option>
            <option value="MIMAROPA Region">MIMAROPA Region</option>
          </select>
        </div>
      </div>

      {/* Birthdate , Age, & Contact number */}
      <div className={"w-full flex flex-col"}>
        <p className="font-semibold mt-4 ">Additional information:</p>

        <div className={`w-full h-12 border mb-2 border-black rounded`}>
          <div className={`flex flex-row`}>
            <div>
              <h1 className={`text-xs select-none text-gray-400 ml-1`}>Age</h1>
              <input // Age
                className={`pl-2 outline-none w-full cursor-pointer`}
                type="text"
                maxLength={2}
                pattern="[0-9]+"
              />
            </div>
            <div>
              <h1 className={`text-xs select-none text-gray-400 ml-1`}>
                Birthdate
              </h1>
              <input // Birthdate
                className={`pl-2 outline-none w-full cursor-pointer`}
                type="date"
              />
            </div>
          </div>
        </div>
        <div className={`w-full h-12 border mb-2 border-black rounded`}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Contact number
          </h1>
          <input // Contact
            className={`pl-2 outline-none w-full cursor-pointer`}
            type="text"
            maxLength={11}
          />
        </div>
      </div>

      <p className={"font-semibold mt-2"}>Gender:</p>
      <div className={"w-full"}>
        <div className={"w-full flex justify-around"}>
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
