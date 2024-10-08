import React from "react";

export default function PasswordInput({ label, id, value, onChange }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type="password"
        name={id}
        id={id}
        value={value}
        // placeholder="••••••••"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
        required=""
      />
    </div>
  );
}
