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
    <section>
      <h2>Write Your Content</h2>

      <TextInput onTextChange={handleTextChange} />

      <StatsDisplay stats={stats} />

      <h3>Word Count Goals</h3>

      <p>Minimum Words: {minWords}</p>
      <p>Maximum Words: {maxWords}</p>
      <p>Target Reading Time: {targetReadingTime} minute(s)</p>

      {/* Show word progress */}
      <label htmlFor="word-progress">
        Word Progress: {Math.round(progress)}%
      </label>

      <progress
        id="word-progress"
        value={progress}
        max={100}
      />

      {/* Show word count feedback */}
      {stats.wordCount < minWords ? (
        <p>Keep writing! You have not reached the minimum.</p>
      ) : stats.wordCount <= maxWords ? (
        <p>Great job! You are within your word count goal.</p>
      ) : (
        <p>You have exceeded the maximum word count.</p>
      )}

      <p>Current Text: {text}</p>
    </section>
  );
}