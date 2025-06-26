import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import InputField from "../components/InputField";

export default function NewPage() {
  return (
    <div className="space-y-8 max-w-xl">
      <h1 className="text-2xl font-bold text-indigo-800">
        Welcome to the New Page
      </h1>
      <p className="text-gray-600 italic">
        Explore the possibilities with your own inputs. Customize as needed.
      </p>

      <InputField
        label="Your Name"
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
              d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3s-4 1.79-4 4 1.79 4 4 4zm0 1c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        }
        type="text"
        placeholder="Enter your name"
        required
      />

      <InputField
        label="Email Address"
        icon={<EnvelopeIcon className="h-5 w-5 text-indigo-500" />}
        type="email"
        placeholder="Enter your email"
        required
      />

      <InputField
        label="Phone Number"
        icon={<PhoneIcon className="h-5 w-5 text-indigo-500" />}
        type="tel"
        placeholder="Enter your phone number"
        required
      />
    </div>
  );
}
