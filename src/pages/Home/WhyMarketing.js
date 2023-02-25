import React from "react";

const WhyMarketing = () => {
  return (
    <div className="mt-20">
      <h1 className="font-semibold text-center text-8xl text-primary">
        Why <b className="text-secondary">Marketing?</b>
      </h1>
      <div className="h-[400px]">
        <lottie-player
          src="https://assets7.lottiefiles.com/private_files/lf30_GjhcdO.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p className="mt-10 text-gray-600 text-md">
        It’s useful to think about this concept in terms of customer “needs.”
        What does a potential customer need that leads them to your solution?
        Understanding that need can enable you to not only tailor your sales and
        marketing messaging, but inform your product research and development,
        customer service, and other aspects of your business.
      </p>
      <h1 className="mt-10 text-4xl font-semibold text-primary ">
        The answers to all these questions lie in marketing
      </h1>
      <p className="mt-10 text-gray-600 text-md">
        We all know the big brands that worked on a major product launch
        strategy, but never seemed to hold the attention of their audience. This
        tends to happen when the company isn’t focused on customer needs.
      </p>
    </div>
  );
};

export default WhyMarketing;
