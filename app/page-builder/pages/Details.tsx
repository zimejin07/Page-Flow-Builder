import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import InputField from "../components/InputField";

export default function DetailsPage() {
  return (
    <div className="space-y-6 max-w-lg">
      <h2 className="text-xl font-semibold">Details Page</h2>
      <p className="text-gray-700">
        This is a placeholder for the Details form step. Add your fields here.
      </p>

      <InputField
        label="What is your name?"
        icon={
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3s-4 1.79-4 4 1.79 4 4 4zm0 1c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        }
        type="text"
        placeholder="John Doe"
        required
      />

      <InputField
        label="What is your email?"
        icon={<EnvelopeIcon className="h-5 w-5" />}
        type="email"
        placeholder="you@example.com"
        required
      />

      <InputField
        label="What is your phone number?"
        icon={<PhoneIcon className="h-5 w-5" />}
        type="tel"
        placeholder="+1 (555) 123-4567"
        required
      />
    </div>
  );
}
