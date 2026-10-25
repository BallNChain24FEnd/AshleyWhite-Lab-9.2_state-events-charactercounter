import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {

  return (
  <section className="mt-6">
    <h2 className="mb-4 text-xl font-semibold text-gray-800">
      Text Statistics
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-lg bg-indigo-50 p-4 text-center">
        <h3 className="text-sm text-gray-600">Characters</h3>
        <p className="text-3xl font-bold text-indigo-700">
          {stats.characterCount}
        </p>
      </div>

      <div className="rounded-lg bg-teal-50 p-4 text-center">
        <h3 className="text-sm text-gray-600">Words</h3>
        <p className="text-3xl font-bold text-teal-700">
          {stats.wordCount}
        </p>
      </div>

      {showReadingTime && (
        <div className="rounded-lg bg-violet-50 p-4 text-center">
          <h3 className="text-sm text-gray-600">Reading Time</h3>
          <p className="text-3xl font-bold text-violet-700">
            {stats.readingTime.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">minutes</p>
        </div>
      )}
    </div>
  </section>
);
}