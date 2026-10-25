import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import type { CharacterCounterProps, TextStats } from "../../types";

export default function CharacterCounter({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1,
}: CharacterCounterProps) {

  // Track current text
  const [text, setText] = useState("");

  // Track text statistics
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  // Handle text changes
  function handleTextChange(newText: string) {
    setText(newText);

    // Count characters
    const characterCount = newText.length;

    // Count words
    const wordCount = newText.trim() === ""
      ? 0
      : newText.trim().split(/\s+/).length;

    // Calculate reading time
    const readingTime = wordCount / 200;

    // Update statistics
    setStats({
      characterCount,
      wordCount,
      readingTime,
    });
  }

  // Calculate word progress
  const progress = maxWords > 0
    ? Math.min((stats.wordCount / maxWords) * 100, 100)
    : 0;

  return (
  <section className="rounded-xl bg-white p-6 shadow-md sm:p-8">
    <h2 className="mb-4 text-xl font-semibold text-gray-800">
      Write Your Content
    </h2>

    <TextInput onTextChange={handleTextChange} />

    <StatsDisplay stats={stats} />

    <div className="mt-6">
      <h3 className="mb-3 text-lg font-semibold text-gray-800">
        Word Count Goals
      </h3>

      <div className="mb-3 flex flex-wrap justify-between gap-2 text-sm text-gray-600">
        <p>Min: {minWords} words</p>
        <p>Max: {maxWords} words</p>
      </div>

      {/* Show word progress */}
      <label
        htmlFor="word-progress"
        className="mb-2 block text-sm font-medium"
      >
        Word Progress: {Math.round(progress)}%
      </label>

      <progress
        id="word-progress"
        value={progress}
        max={100}
        className="h-4 w-full accent-teal-600"
      />

      {/* Show word count feedback */}
      <div aria-live="polite" className="mt-3">
        {stats.wordCount < minWords ? (
          <p className="text-orange-600">
            Keep writing! You have not reached the minimum.
          </p>
        ) : stats.wordCount <= maxWords ? (
          <p className="text-green-700">
            Great job! You are within your word count goal.
          </p>
        ) : (
          <p className="text-red-600">
            You have exceeded the maximum word count.
          </p>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Target Reading Time: {targetReadingTime} minute(s)
      </p>

      <p className="mt-2 text-sm text-gray-500">
        You have entered {text.length} characters.
      </p>
    </div>
  </section>
);
}