import React from "react";

const Numbers = () => {
  return (
    <div className="px-52 mt-20">
    <h1 className="text-2xl text-gray-600 my-5 ">Util Today We Have Provided Our Services To...</h1>
      <div className="bg-secondary flex space-x-10 p-5 justify-between rounded text-center">
        <div className="flex flex-col space-y-2">
          <h1 className=" text-8xl text-white">152</h1>
          <h1 className=" text-2xl text-white">Clients</h1>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className=" text-8xl text-white">485</h1>
          <h1 className=" text-2xl text-white">Projects</h1>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className=" text-8xl text-white">24</h1>
          <h1 className=" text-2xl text-white">Location</h1>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
