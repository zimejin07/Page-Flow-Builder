import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import InputField from "../components/InputField";

export default function EndingPage() {
  return (
    <div className="space-y-6 max-w-lg">
      <h2 className="text-xl font-semibold text-indigo-800">Ending Page</h2>
      <p className="text-gray-700">
        This is a placeholder for the Ending form step. Add your fields here.
      </p>

      <InputField
        label="Provide feedback"
        icon={
          <svg
            className="h-5 w-5 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m2 4H7l-1 2 2-10h10l2 7h-8z"
            />
          </svg>
        }
        type="text"
        placeholder="Your feedback here"
        required
      />
    </div>
  );
}
