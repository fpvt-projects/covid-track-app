import React, { useState } from "react";
import RegistrationTestResultForm from "./RegistrationTestResultForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AccountDetailsForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [region, setRegion] = useState("");
  const [cellnumber, setCellnumber] = useState("");
  const [birthdate, setBirthdatee] = useState("");
  const [gender, setGender] = useState("");

  const [antigenType, setAntigenType] = useState("");
  const [brand, setBrand] = useState("");
  const [result, setResult] = useState("");

  const inputAntigenType = (e) => setAntigenType(e.target.value);
  const inputBrand = (e) => setBrand(e.target.value);
  const inputResult = (e) => setResult(e.target.value);

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
  const handleInputCellnumber = (e) =>
    setCellnumber(e.target.value.replace(/\D/g, ""));
  const handleInputBirthdate = (e) => setBirthdatee(e.target.value);
  const handleInputGender = (e) => setGender(e.target.value);

  const showResultForm = () => setToggleResultForm(!toggleResultForm);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
    setLastName("");
    setFirstName("");
    setMiddleName("");
    setHouseNumber("");
    setRegion("");
    setBirthdatee("");
    setCellnumber("");
    setGender("");
  };

  const createAccount = () => {
    axios
      .post(`/v1/registrations`, {
        account: {
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        },
      })
      .then((res) => {
        console.log(res);
        let account_id = res.data.account.id;
        createUser(account_id);
      })
      .catch((error) => console.log(error));
  };

  const createUser = (account_id) => {
    axios
      .post(`/v1/users`, {
        user: {
          lastname: lastname,
          middlename: middlename,
          firstname: firstname,
          address: houseNumber,
          region: region,
          cellnumber: cellnumber,
          birthdate: birthdate,
          gender: gender,
          account_id: account_id,
        },
      })
      .then((res) => {
        let user_id = res.data.id;
        registerLogin(user_id);
      })
      .catch((error) => console.log(error));
  };

  const registerLogin = (user_id) => {
    axios
      .post(`/auth`, {
        auth: {
          email: email,
          password: password,
        },
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.jwt);
        let jwToken = res.data.jwt;
        if (antigenType === "") {
          clearInputs();
          navigate("/");
        } else {
          submitResult(user_id, jwToken);
        }
      })
      .catch((error) => console.log(error));
  };

  const submitResult = (user_id, jwToken) => {
    axios
      .post(
        `/v1/result_logs`,
        {
          result_log: {
            antigen_type: antigenType,
            brand: brand,
            result: result,
            user_id: user_id,
          },
        },
        {
          headers: {
            Authorization: jwToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        clearInputs();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    if (email === "") {
      setError("Please input a valid email.");
    } else if (password === "" || password_confirmation === "") {
      setError("Please input a valid password.");
    } else if (password !== password_confirmation) {
      setError("Please confirm your password.");
    } else if (lastname === "" || firstname === "" || middlename === "") {
      setError("Please input a complete name.");
    } else if (houseNumber === "" || region === "") {
      setError("Please input a valid address.");
    } else {
      createAccount();
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
            className={`w-full cursor-pointer outline-none bg-white`}
            value={region}
            onChange={handleInputRegion}
          >
            <option value={null}>-- Please select a region --</option>
            <option value="Region_I">Region_I</option>
            <option value="Region_II">Region_II</option>
            <option value="NCR">NCR</option>
            <option value="Region_III">Region_III</option>
            <option value="Region_IV:A">Region_IV:A</option>
            <option value="MIMAROPA">MIMAROPA</option>
            <option value="Region_VI">Region_VI</option>
            <option value="Region_VII">Region_VII</option>
            <option value="Region_VIII">Region_VIII</option>
            <option value="Region_IX">Region_IX</option>
            <option value="Region_X">Region_X</option>
            <option value="Region_XI">Region_XI</option>
            <option value="Region_XII">Region_XII</option>
            <option value="CAR">CAR</option>
            <option value="BARMM">BARMM</option>
          </select>
        </div>
      </div>

      {/* Birthdate , Age, & Contact number */}
      <div className={"w-full flex flex-col"}>
        <p className="font-semibold mt-4 ">Additional information:</p>

        <div className={`w-full h-12 border mb-2 border-black rounded`}>
          <div className={`w-11/12`}>
            <h1 className={`text-xs select-none text-gray-400 ml-1`}>
              Birthdate
            </h1>
            <input // Birthdate
              className={`pl-2 outline-none w-full cursor-pointer bg-white`}
              onChange={handleInputBirthdate}
              value={birthdate}
              type="date"
            />
          </div>
        </div>
        <div className={`w-full h-12 border mb-2 border-black rounded`}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Contact number
          </h1>
          <input // Contact
            className={`pl-2 outline-none w-full cursor-pointer`}
            onChange={handleInputCellnumber}
            value={cellnumber}
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
              onChange={handleInputGender}
              className={"mr-2 cursor-pointer"}
              type="radio"
              value="Male"
              name="gender"
            />
            Male
          </div>
          <div>
            <input // Gender Female
              onChange={handleInputGender}
              className={"mr-2 cursor-pointer"}
              type="radio"
              value="Female"
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

      <RegistrationTestResultForm
        toggleResultForm={toggleResultForm}
        antigenType={antigenType}
        brand={brand}
        result={result}
        inputAntigenType={inputAntigenType}
        inputBrand={inputBrand}
        inputResult={inputResult}
      />

      <h1 className={"text-red-600 text-center font-semibold my-4"}>{error}</h1>

      <div className={"mt-8 flex justify-around"}>
        <button
          className={`tracking-widest ${
            lastname === "" ||
            firstname === "" ||
            houseNumber === "" ||
            region === "" ||
            cellnumber === "" ||
            birthdate === "" ||
            gender === ""
              ? "bg-gray-300"
              : "bg-slate-800"
          }  px-6 py-2 rounded font-bold text-white cursoir-pointer mb-8`}
          onClick={handleSubmit}
          disabled={
            lastname === "" ||
            firstname === "" ||
            houseNumber === "" ||
            region === "" ||
            cellnumber === "" ||
            birthdate === "" ||
            gender === ""
              ? true
              : false
          }
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default AccountDetailsForm;
