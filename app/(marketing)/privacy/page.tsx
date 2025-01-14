import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex justify-center p-6">
      <div className="max-w-4xl w-full pt-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
          We value your privacy and are committed to protecting your personal
          data. This policy outlines how we collect, use, and safeguard your
          information.
        </p>
        <p className="text-gray-600 dark:text-gray-200 mt-4 leading-relaxed">
          <strong>Data Collection:</strong> We collect data such as your name,
          email, and usage information to improve our services.
        </p>
        <p className="text-gray-600 dark:text-gray-200 mt-4 leading-relaxed">
          <strong>Data Usage:</strong> Your data is used only for providing and
          enhancing our platform. We do not sell your information to third
          parties.
        </p>
        <p className="text-gray-600 dark:text-gray-200 mt-4 leading-relaxed">
          If you have any questions or concerns, please contact us.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
