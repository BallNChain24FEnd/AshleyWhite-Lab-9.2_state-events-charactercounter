import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {

  return (
    <section>
      <h2>Text Statistics</h2>

      <div>
        <h3>Characters</h3>
        <p>{stats.characterCount}</p>
      </div>

      <div>
        <h3>Words</h3>
        <p>{stats.wordCount}</p>
      </div>

      {showReadingTime && (
        <div>
          <h3>Reading Time</h3>
          <p>{stats.readingTime.toFixed(2)} minutes</p>
        </div>
      )}
    </section>
  );
}