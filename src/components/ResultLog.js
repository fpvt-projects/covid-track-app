import React, { useState, useEffect } from "react";
import Logs from "./Results/Logs";
import ResultForm from "./ResultForm";
import axios from "axios";
import jwt from "jwt-decode";

function ResultLog({ setUserState, setResultToggler, resultToggler }) {
  const [qLogs, setQlogs] = useState([]);

  const [antigenType, setAntigenType] = useState("");
  const [brand, setBrand] = useState("");
  const [result, setResult] = useState("");

  const inputAntigenType = (e) => setAntigenType(e.target.value);
  const inputBrand = (e) => setBrand(e.target.value);
  const inputResult = (e) => setResult(e.target.value);

  const emptyForm = () => {
    setAntigenType("");
    setBrand("");
    setResult("");
  };

  const decoded = jwt(sessionStorage.getItem("token"));

  const submitResult = () => {
    axios
      .post(
        `/v1/result_logs`,
        {
          result_log: {
            antigen_type: antigenType,
            brand: brand,
            result: result,
            user_id: decoded.user_id,
          },
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        emptyForm();
        getQlogs();
        setResultToggler(!resultToggler);
      })
      .catch((error) => console.log(error));
  };

  const getQlogs = () => {
    axios
      .get(`/v1/quarantine_logs?user_id=${decoded.user_id}`, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        let updatedList = [];
        res.data.reverse().forEach((item) => {
          updatedList.push({
            date: item.date,
            status: item.status,
            id: item.id,
            result_log_id: item.result_log_id,
          });
        });
        setQlogs(updatedList);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    let isApiSubscribed = true;
    getQlogs();
    return () => {
      isApiSubscribed = false;
    };
  }, []);
  return (
    <div className={`w-full h-full flex flex-col tablet:flex-row`}>
      <div
        className={` w-full tablet:w-1/3 h-50 flex flex-col justify-center items-center pb-8 border-b-2 border-black`}
      >
        <div className={`w-4/5 tablet:w-4/5 mx-auto`}>
          <ResultForm
            antigenType={antigenType}
            brand={brand}
            result={result}
            inputAntigenType={inputAntigenType}
            inputBrand={inputBrand}
            inputResult={inputResult}
          />
        </div>
        <button
          onClick={submitResult}
          className={`px-4 py-2 text-white rounded ${
            antigenType === "" || brand === "" || result === ""
              ? "bg-slate-300 cursor-default"
              : "bg-slate-800 cursor-pointer"
          } mt-4`}
          disabled={
            antigenType === "" || brand === "" || result === "" ? true : false
          }
        >
          SUBMIT
        </button>
      </div>
      <div className={`w-full tablet:w-2/3 overflow-y-auto`}>
        <Logs qLogs={qLogs} setUserState={setUserState} />
      </div>
    </div>
  );
}

export default ResultLog;
