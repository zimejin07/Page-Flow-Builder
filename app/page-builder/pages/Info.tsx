"use client";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import InputField from "../components/InputField";

export default function InfoPage() {
  return (
    <div className="space-y-6 max-w-lg">
      <h2 className="text-xl font-semibold text-indigo-800">
        Sign up for the Weekly Newsletter
      </h2>
      <p className="text-gray-700">
        Your weekly source of all things business!
      </p>

      <InputField
        label="What is your email?"
        icon={<EnvelopeIcon className="h-5 w-5 text-indigo-500" />}
        type="email"
        placeholder="you@example.com"
        required
      />

      <InputField
        label="What is your phone number?"
        icon={<PhoneIcon className="h-5 w-5 text-indigo-500" />}
        type="tel"
        placeholder="+1 (555) 123-4567"
        required
      />
    </div>
  );
}
