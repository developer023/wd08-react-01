import React, { useState } from "react";
import { RegistrationForm, SignInForm } from "containers";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { S1, S2, S3 } from "assets";

export const Registration = () => {
  const [c, setC] = useState(3);
  const [a, setA] = useState(1);
  const b = 2;

  const setAHandler = () => {
    setA(a + 1);
  };

  const setCHandler = () => {
    setC(c + 1);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        <button onClick={setAHandler}>A +1</button>
        C={c}
        <button onClick={setCHandler}>C +1</button>
      </div>

      <h1>Registration & SignIn Page</h1>
      <RegistrationForm a={a} b={b} c={c} />
      <br />
      <SignInForm />
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={S1} alt="image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="300" src={S2} alt="image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="300" src={S3} alt="image 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
