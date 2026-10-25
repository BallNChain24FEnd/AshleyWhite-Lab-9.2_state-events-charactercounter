import { useState } from "react";
import type { TextInputProps } from "../../types";

export default function TextInput({
  onTextChange,
  placeholder = "Start typing your content here...",
  initialValue = "",
}: TextInputProps) {

  // Track text input
  const [text, setText] = useState(initialValue);

  // Handle text changes
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newText = event.target.value;

    // Update text state
    setText(newText);

    // Send text to parent
    onTextChange(newText);
  }

  return (
  <div className="w-full">
    <label
      htmlFor="text-input"
      className="mb-2 block font-medium text-gray-700"
    >
      Your Text
    </label>

    <textarea
      id="text-input"
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      rows={6}
      className="w-full rounded-lg border border-gray-300
        bg-white p-4 text-gray-800
        focus:border-blue-500 focus:outline-none
        focus:ring-2 focus:ring-blue-200"
    />
  </div>
);
}