import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-slate-800">
          Character Counter
        </h1>

        <p className="mb-8 text-center text-slate-600">
          Write freely. Track your progress.
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