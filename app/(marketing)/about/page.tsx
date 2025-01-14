import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex justify-center p-6">
      <div className="max-w-4xl w-full rounded-lg pt-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          About Us
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to Simplify, We are committed to providing the best services
          and experiences for our users. Our team of experts is dedicated to
          creating innovative solutions tailored to meet your needs.
        </p>
        <p className="text-gray-700 mt-4 dark:text-gray-300 leading-relaxed">
          With years of experience in the industry, we take pride in delivering
          exceptional quality and building lasting relationships with our
          clients.
        </p>
      </div>
    </div>
  );
};

export default About;
