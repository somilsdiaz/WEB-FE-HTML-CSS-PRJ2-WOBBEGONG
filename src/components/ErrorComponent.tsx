import React from "react";

type ErrorComponentProps = {
  message: string;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-red-100 border border-red-400 text-red-700 rounded-md">
    <svg
      className="w-12 h-12 text-red-600 mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4m0 4h.01M12 2a10 10 0 11-7.03 16.97A10 10 0 0112 2z"
      ></path>
    </svg>
    <h2 className="text-lg font-semibold">Error al cargar</h2>
    <p className="mt-2 text-center">{message}</p>
  </div>
);

export default ErrorComponent;
