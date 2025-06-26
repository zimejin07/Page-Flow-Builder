import React from "react";
import { UserIcon, CalendarIcon } from "@heroicons/react/24/outline";
import InputField from "../components/InputField";

export default function OtherPage() {
  return (
    <div className="space-y-6 max-w-lg">
      <h2 className="text-xl font-semibold text-indigo-800">Other Page</h2>
      <p className="text-gray-700">
        This is a placeholder for the Other form step. Add your fields here.
      </p>

      <InputField
        label="What is your full name?"
        icon={<UserIcon className="h-5 w-5 text-indigo-500" />}
        type="text"
        placeholder="John Doe"
        required
      />

      <InputField
        label="Select a date"
        icon={<CalendarIcon className="h-5 w-5 text-indigo-500" />}
        type="date"
        required
      />
    </div>
  );
}
