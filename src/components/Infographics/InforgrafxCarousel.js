import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function infografxCarousel() {
  return (
    <div className={`w-4/5 h-100`}>
      <Carousel infiniteLoop="true" centerMode="true" autoPlay="true">
        <div className={`h-full`}>
          <img
            className={`w-full`}
            src="https://decoda.ca/wp-content/uploads/Physical-distancing-infographic-791x1024-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.paho.org/en/file/61942/download?token=VhIwWVVD"
            alt=""
          />
        </div>
        <div>
          <img
            alt=""
            src="https://www.who.int/images/default-source/wpro/countries/philippines/emergencies/covid-19/avoid-the-3cs/slide1.png"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://www.who.int/images/default-source/wpro/countries/philippines/emergencies/covid-19/bahaynihan/stay-at-home-flier-eng-a5-with-branding.png"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default infografxCarousel;
