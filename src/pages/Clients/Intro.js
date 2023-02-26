import React from "react";

const Intro = () => {
  return (
    <div className="h-screen bg-primary grid grid-cols-2 items-center">
      <div className="h-[700px]">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_njobaah2.json"
          background="transparent"
          speed="1"
          loop̥
          autoplay
        ></lottie-player>
      </div>

      <div>
        <h1 className="text-8xl font-semibold text-white">
          We <b className="text-secondary">work</b> together with our{" "}
          <b className="text-green-500">clients</b>
        </h1>
      </div>
    </div>
  );
};

export default Intro;
