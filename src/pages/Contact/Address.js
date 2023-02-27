import React from "react";

const Address = () => {
  return (
    <div className="flex justify-center"> 
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl fond-semibold">Get In Touch</h1>
        <p>
          VPAGENCY is Digital Marketing Agency, We Provide Marketing and
          Development Serviecs
        </p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa6001d] p-2 rounded">
            <i class="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div className="">
            <h1 className="font-semibold text-xl">Visit Us</h1>
            <p>Gadag, Karnataka India</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa6001d] p-2 rounded">
            <i class="ri-mail-send-fill text-3xl text-secondary"></i>
          </div>
          <div className="">
            <h1 className="font-semibold text-xl">Mail Us</h1>
            <p>vpagency@gmail.com</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa6001d] p-2 rounded">
            <i class="ri-phone-fill text-3xl text-secondary"></i>
          </div>
          <div className="">
            <h1 className="font-semibold text-xl">Call Us</h1>
            <p>998685956</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
