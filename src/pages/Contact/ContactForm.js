import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="flex flex-col space-y-10">
        <h1 className="text-4xl font-semibold text-primary mb-5">
          Send a Message
        </h1>
        <div className="flex space-x-10">
          <input
            type="text"
            placeholder="First Name"
            className="border py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>
        <div className="flex space-x-10">
          <input
            type="text"
            placeholder="Email"
            className="border py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="border py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>
        <div className="flex space-x-10">
          <textarea
            rows={5}
            type="text"
            placeholder="Message"
            className="border py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-secondary py-3 px-5 rounded max-w-max"
          >
            Send A Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
