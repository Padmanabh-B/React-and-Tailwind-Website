import React from "react";

const Intro = () => {
  return (
    <div className="grid items-center h-screen grid-cols-2">
      <div className="flex flex-col px-20 space-y-10">
        <h1 className="font-medium text-7xl text-primary">
          The Best <br /><b className="text-secondary">Mareting</b>
        </h1>
        <h1 className="text-4xl font-medium ">Does't feel like marketing</h1>
        <button className="px-16 py-5 text-xl text-white bg-secondary max-w-max hover:bg-primary">Get Started</button>
      </div>
      <div className="p-10">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_hwcplx4x.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Intro;
