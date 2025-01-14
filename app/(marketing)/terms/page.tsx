import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen flex justify-center p-6">
      <div className="max-w-4xl w-full pt-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
          By accessing and using our platform, you agree to comply with our
          terms and conditions. Please read them carefully.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-200">
          <li>Users must be 18 years or older to use our services.</li>
          <li>Do not misuse our platform for unlawful activities.</li>
          <li>We reserve the right to update these terms at any time.</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-200 mt-4 leading-relaxed">
          For more details, please contact us or refer to our policies.
        </p>
      </div>
    </div>
  );
};

export default Terms;
