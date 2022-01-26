import React, { useState } from "react";
import TestResultForm from "./TestResultForm";

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

  const handleInputEmail = (e) => setEmail(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);
  const handleInputPasswordConfirmation = (e) =>
    setPasswordConfirmation(e.target.value);
  const handleInputLastname = (e) => setLastName(e.target.value);
  const handleInputFirstname = (e) => setFirstName(e.target.value);
  const handleInputMiddlename = (e) => setMiddleName(e.target.value);
  const handleInputHouseNumber = (e) => setHouseNumber(e.target.value);
  const handleInputCity = (e) => setCity(e.target.value);

  const handleSubmit = () => {
    if (email === "") {
      setError("Email Error");
    } else if (password === "" || password_confirmation === "") {
      setError("Password Error");
    } else if (lastname === "" || firstname === "" || middlename === "") {
      setError("Name Error");
    } else if (houseNumber === "" || city === "") {
      setError("Address Error");
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
        "w-4/5 bg-white pt-4 pb-24 laptop:pb-0 px-12 laptop:w-3/4 tablet:w-1/2"
      }
    >
      <h1 className={"text-center font-bold text-4xl font-sans"}>
        COVID TRACKER
      </h1>
      <p className={"text-center tracking-widest "}>
        avion-school final project 2022
      </p>

      <p className={"italic mt-4"}>Account Information.</p>

      {/* User login information : Email & Password */}
      <div className={"w-full flex flex-col laptop:flex-row"}>
        <div className={"w-full"}>
          <p className={"font-semibold mt-2"}>Email:</p>
          <input // Email
            className={`border ${
              error === "Email Error" ? "border-red-500" : "border-black"
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
                error === "Password Error" ? "border-red-500" : "border-black"
              } pl-2 outline-none w-full h-8`}
              type="text"
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
                error === "Password Error" ? "border-red-500" : "border-black"
              } pl-2 outline-none w-full h-8`}
              type="text"
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
            error === "Name Error" ? "border-red-500" : "border-black"
          } pl-2 outline-none w-full mt-4 laptop:mt-0 h-8`}
          type="text"
          value={lastname}
          onChange={handleInputLastname}
          placeholder="Lastname"
        />
        <input // Firstname
          className={`border ${
            error === "Name Error" ? "border-red-500" : "border-black"
          } pl-2 outline-none w-full mt-4 laptop:mt-0 h-8`}
          type="text"
          value={firstname}
          onChange={handleInputFirstname}
          placeholder="Firstname"
        />
        <input // Middlename
          className={`border ${
            error === "Name Error" ? "border-red-500" : "border-black"
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
            error === "Address Error" ? "border-red-500" : "border-black"
          } pl-2 outline-none w-full mt-4 laptop:mt-0 h-8`}
          type="text"
          value={houseNumber}
          onChange={handleInputHouseNumber}
          placeholder="Building / Street / House Number"
        />
        <input // City
          className={`border ${
            error === "Address Error" ? "border-red-500" : "border-black"
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

      <TestResultForm />

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
