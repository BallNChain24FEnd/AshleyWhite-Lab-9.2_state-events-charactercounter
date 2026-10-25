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
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        rows={6}
      />
    </div>
  );
}