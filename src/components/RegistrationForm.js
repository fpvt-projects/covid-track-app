import React, { useState } from "react";
import RegistrationTestResultForm from "./RegistrationTestResultForm";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import InputText from "./Input/InputText";
import InputPassword from "./Input/InputPassword";
import InputDate from "./Input/InputDate";
import InputGender from "./Input/InputGender";

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

  const [toggleResultForm, setToggleResultForm] = useState(false);

  const inputAntigenType = (e) => setAntigenType(e.target.value);
  const inputBrand = (e) => setBrand(e.target.value);
  const inputResult = (e) => setResult(e.target.value);

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
        "w-full h-full tablet:h-5/6 bg-white pt-4 pb-24 mt-0.5 tablet:mt-4 laptop:pb-0 px-2 laptop:px-2 laptop:w-1/3 tablet:w-1/2 select-none shadow-xl tablet:rounded"
      }
    >
      <div className={`w-3/4 mx-auto mt-4`}>
        <h1 className={`font-semibold text-2xl tracking-widest`}>
          REGISTRATION
        </h1>
        <p className={"text-xs mb-2"}>
          Register and submit your covid test result.
        </p>
      </div>
      <div className={`h-2/3 overflow-y-auto`}>
        {/* User login information : Email & Password */}
        <div className={"w-3/4 mx-auto flex flex-col mt-8"}>
          <InputText label="Email" value={email} onChange={handleInputEmail} />
          <InputPassword
            label="Password"
            value={password}
            onChange={handleInputPassword}
          />
          <InputPassword
            label="Password Confirmation"
            value={password_confirmation}
            onChange={handleInputPasswordConfirmation}
          />
        </div>

        {/* User full name : Lastname, Firstname, Middlename */}
        <div className={`w-3/4 mx-auto mt-8 flex flex-col`}>
          <InputText
            label="Lastname"
            value={lastname}
            onChange={handleInputLastname}
          />
          <InputText
            label="Firstname"
            value={firstname}
            onChange={handleInputFirstname}
          />
          <InputText
            label="Middlename"
            value={middlename}
            onChange={handleInputMiddlename}
          />
          <InputText
            label="Building | Street | House number | City"
            value={houseNumber}
            onChange={handleInputHouseNumber}
          />
          <div
            className={`w-full h-12 border px-2 mb-2 bg-white shadow-[inset_0px_2px_5px_-1px_rgba(68,68,68,0.6)] ${
              error === "Please input a valid address."
                ? "border-red-500"
                : "border-none"
            } rounded`}
          >
            <h1 className={`mt-1 text-xs select-none text-gray-400 ml-1`}>
              Region
            </h1>
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
          <InputDate
            label="Birthdate"
            value={birthdate}
            onChange={handleInputBirthdate}
          />
          <InputText
            label="Contact number"
            value={cellnumber}
            onChange={handleInputCellnumber}
            maxLength="11"
          />
          <InputGender onChange={handleInputGender} />
        </div>

        <hr className={"w-4/5 mx-auto my-4 border border-t-gray-300"} />

        <button
          className={"w-full text-xs font-semibold"}
          onClick={showResultForm}
        >
          {toggleResultForm
            ? "Click here to close result form."
            : "Click here to input test result."}
        </button>

        <div className={`w-3/4 mx-auto`}>
          <RegistrationTestResultForm
            toggleResultForm={toggleResultForm}
            antigenType={antigenType}
            brand={brand}
            result={result}
            inputAntigenType={inputAntigenType}
            inputBrand={inputBrand}
            inputResult={inputResult}
          />
        </div>
      </div>

      <div className={" w-3/4 mx-auto mt-8 flex justify-around"}>
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
              : "bg-zinc-700"
          } w-full px-6 py-2 rounded-xs font-bold text-white cursoir-pointer mb-8`}
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
