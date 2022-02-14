import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";

function EditUserProfile() {
  const [Lastname, setLastname] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Middlename, setMiddlename] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");

  const inputLastname = (e) => setLastname(e.target.value);
  const inputFirstname = (e) => setFirstname(e.target.value);
  const inputMiddlename = (e) => setMiddlename(e.target.value);
  const inputAddress = (e) => setAddress(e.target.value);
  const inputRegion = (e) => setRegion(e.target.value);
  const inputBirthdate = (e) => setBirthdate(e.target.value);
  const inputContact = (e) => setContact(e.target.value);
  const inputGender = (e) => setGender(e.target.value);

  const account_id = jwt(sessionStorage.getItem("token")).sub;
  const getCurrentUserinfo = () => {
    axios
      .get(`/v1/users`, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        res.data.forEach((item) => {
          if (item.account_id === account_id) {
            setLastname(item.lastname);
            setFirstname(item.firstname);
            setMiddlename(item.middlename);
            setAddress(item.address);
            setRegion(item.region);
            setBirthdate(item.birthdate);
            setContact(item.cellnumber);
            setGender(item.gender);
          }
        });
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    axios
      .patch(
        `/v1/users/${account_id}`,
        {
          user: {
            lastname: Lastname,
            firstname: Firstname,
            middlename: Middlename,
            address: address,
            region: region,
            cellnumber: contact,
            birthdate: birthdate,
            gender: gender,
            account_id: account_id,
          },
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        alert(`Profile updated!`);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCurrentUserinfo();
  }, []);

  return (
    <div className={`w-full mb-8 laptop:w-1/2 flex flex-col pt-10 px-4 pb-14`}>
      <h1 className={`text-2xl font-semibold mb-4`}>
        EDIT ACCOUNT INFORMATION:
      </h1>
      <div className={`w-full h-3/4 mx-auto pl-8 overflow-y-auto`}>
        <div className={`w-full h-12 border-b-2  mb-2 `}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>Lastname</h1>
          <input // Lastname
            className={`pl-2 outline-none w-full `}
            type="text"
            value={Lastname}
            onChange={inputLastname}
          />
        </div>

        <div className={`w-full h-12 border-b-2  mb-2 `}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Firstname
          </h1>
          <input // Firstname
            className={`pl-2 outline-none w-full `}
            type="text"
            value={Firstname}
            onChange={inputFirstname}
          />
        </div>

        <div className={`w-full h-12 border-b-2  mb-2 `}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Middlename
          </h1>
          <input // Middlename
            className={`pl-2 outline-none w-full `}
            type="text"
            value={Middlename}
            onChange={inputMiddlename}
          />
        </div>

        <div className={`w-full h-12 border-b-2  mb-2`}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Building / Street / House number / City
          </h1>
          <input // Addrss
            className={`pl-2 outline-none w-full`}
            type="text"
            value={address}
            onChange={inputAddress}
          />
        </div>

        <div className={`w-full h-12 border-b-2  mb-2`}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>Region</h1>
          <select
            className={`w-full cursor-pointer outline-none bg-white`}
            value={region}
            onChange={inputRegion}
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

        <div className={`w-full h-12 border-b-2  mb-2`}>
          <div className={`w-full`}>
            <h1 className={`text-xs select-none text-gray-400 ml-1`}>
              Birthdate
            </h1>
            <input // Birthdate
              className={`pl-2 outline-none w-full cursor-pointer bg-white`}
              type="date"
              value={birthdate}
              onChange={inputBirthdate}
            />
          </div>
        </div>

        <div className={`w-full h-12 border-b-2  mb-2`}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>
            Contact number
          </h1>
          <input // Contact
            className={`pl-2 outline-none w-full`}
            type="text"
            maxLength={11}
            value={contact}
            onChange={inputContact}
          />
        </div>

        <div className={`w-full h-12 border-b-2  mb-2`}>
          <h1 className={`text-xs select-none text-gray-400 ml-1`}>Gender</h1>
          <select
            className={`w-full cursor-pointer outline-none bg-white`}
            value={gender}
            onChange={inputGender}
          >
            <option value={null}>-- Please select your gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <button
        className={`px-4 py-2 font-semibold text-s bg-slate-800 text-white`}
        onClick={handleSubmit}
      >
        UPDATE PROFILE
      </button>
    </div>
  );
}

export default EditUserProfile;
