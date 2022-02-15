import React from "react";

function AboutUs() {
  return (
    <div className={`w-3/4 mt-8 h-4/5  `}>
      <h1 className={`font-semibold text-center mb-4`}>ABOUT US</h1>
      <div className={`h-4/5 overflow-y-auto`}>
        <h1 className={`text-justify tracking-widest text-sm `}>
          Coronavirus disease is an infectious disease caused by the SARS-CoV2
          virus. Most people who fall sick with COVID-19 will experience mild to
          moderate symptoms and recover without special treatment. However, some
          will become seriously ill and require medical attention. <br /> <br />
          This project aims to help in collecting covid data from consumers that
          used test-kits bought from online stores. <br />
          <br />
          With this project, users are able to create journal entries to help
          monitor their daily conditions. The project also enable users to
          submit their covid test results in order to help track records of
          covid cases.
          <br /> <br /> <br />
          AvionSchool2022#Batch12Group1
        </h1>
      </div>
    </div>
  );
}

export default AboutUs;
