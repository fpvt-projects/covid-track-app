import React from "react";
import doctorPointerv2 from "../../assets/doctorPointerv2.png";

function Cases({
  apiTotalcount,
  total_case,
  apiActivecases,
  active_cases,
  apiDailynewcases,
  daily_new,
  adpiTotalrecover,
  total_recover,
  apiDailynewrecoveries,
  daily_recover,
}) {
  return (
    <div
      className={`w-full h-auto laptop:h-full pt-4 bg-gradient-to-t flex flex-col justify-between from-gray-300 to-white`}
    >
      <div
        className={`w-11/12 h-full bg-white flex flex-col mx-auto items-center shadow-lg mb-2 rounded pb-4`}
      >
        <div className={`h-full w-full flex justify-between px-4 pt-4 `}>
          <div className={`w-full h-1/2 flex flex-col `}>
            <h1
              className={`font-semibold text-xs tracking-widest text-gray-500`}
            >
              TOTAL CASES:
            </h1>
            <div className={`flex w-full items-center justify-end`}>
              <h1 className={`font-semibold text-2xl mr-2`}>{apiTotalcount}</h1>
              <h1 className={`text-sm font-semibold tracking-widest`}>
                [+{total_case}]
              </h1>
            </div>
          </div>
        </div>

        <div className={`h-full w-full flex justify-between px-4 pt-4 `}>
          <div className={`w-full h-1/2 flex flex-col `}>
            <h1
              className={`font-semibold text-xs tracking-widest text-gray-500`}
            >
              ACTIVE CASES:
            </h1>
            <div className={`flex w-full items-center justify-end`}>
              <h1 className={`font-semibold text-2xl mr-2`}>
                {apiActivecases}
              </h1>
              <h1 className={`text-sm font-semibold tracking-widest`}>
                [+{active_cases}]
              </h1>
            </div>
          </div>
        </div>

        <div className={`h-full w-full flex justify-between px-4 pt-4 `}>
          <div className={`w-full h-1/2 flex flex-col `}>
            <h1
              className={`font-semibold text-xs tracking-widest text-gray-500`}
            >
              DAILY NEW:
            </h1>
            <div className={`flex w-full items-center justify-end`}>
              <h1 className={`font-semibold text-2xl mr-2`}>
                {apiDailynewcases}
              </h1>
              <h1 className={`text-sm font-semibold tracking-widest`}>
                [+{daily_new}]
              </h1>
            </div>
          </div>
        </div>

        <div className={`h-full w-full flex justify-between px-4 pt-4 `}>
          <div className={`w-full h-1/2 flex flex-col `}>
            <h1
              className={`font-semibold text-xs tracking-widest text-gray-500`}
            >
              TOTAL RECOVERIES:
            </h1>
            <div className={`flex w-full items-center justify-end`}>
              <h1 className={`font-semibold text-2xl mr-2`}>
                {adpiTotalrecover}
              </h1>
              <h1 className={`text-sm font-semibold tracking-widest`}>
                [+{total_recover}]
              </h1>
            </div>
          </div>
        </div>

        <div className={`h-full w-full flex justify-between px-4 pt-4 `}>
          <div className={`w-full h-1/2 flex flex-col `}>
            <h1
              className={`font-semibold text-xs tracking-widest text-gray-500`}
            >
              DAILY RECOVERED:
            </h1>
            <div className={`flex w-full items-center justify-end`}>
              <h1 className={`font-semibold text-2xl mr-2`}>
                {apiDailynewrecoveries}
              </h1>
              <h1 className={`text-sm font-semibold tracking-widest`}>
                [+{daily_recover}]
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`h-full`}>
        <img src={doctorPointerv2} alt="" />
      </div>
    </div>
  );
}

export default Cases;
