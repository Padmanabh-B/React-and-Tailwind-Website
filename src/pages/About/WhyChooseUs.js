import React from "react";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Innovative and Passionate",
      image: "images/innovation.png",
      description:
        "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.",
    },
    {
      title: "Good Return on Investment",
      image: "images/investment.png",
      description:
        "Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices",
    },
    {
      title: "Seamless Customer Support",
      image: "images/customer-support.png",
      description:
        "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.",
    },
  ];
  return (
    <div className="px-32 mt-20 border shadow">
      <div className="bg-primary h-72 w-full flex justify-center items-center">
        <h1 className="text-7xl font-semibold text-white">WHY CHOOSE US</h1>
      </div>
      <div className="grid grid-cols-3 p-5 gap-10 cursor-pointer" >
        {items.map((item) => (
          <div className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-150">
            {<img src={item.image} alt="" className="h-20 w-20" />}
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
