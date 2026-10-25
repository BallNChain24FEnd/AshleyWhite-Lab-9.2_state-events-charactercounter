import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Character Counter
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Start typing to see your text statistics.
        </p>

        <CharacterCounter
          minWords={25}
          maxWords={100}
          targetReadingTime={1}
        />
      </div>
    </main>
  );
}