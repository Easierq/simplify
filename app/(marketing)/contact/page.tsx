import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center p-6">
      <div className="max-w-3xl w-full rounded-lg pt-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Contact Us
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm bg-muted"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm bg-muted"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              className="w-full mt-2 px-4 py-2 border rounded-lg shadow-sm bg-muted"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#007bff] hover:bg-[#007bff]/80 text-white py-2 px-4 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
