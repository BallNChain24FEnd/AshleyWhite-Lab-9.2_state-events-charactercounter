import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

export default function App() {
  return (
    <div>
      <h1>Character Counter</h1>
      <p>Start typing to see your text statistics.</p>

      <CharacterCounter
        minWords={25}
        maxWords={100}
        targetReadingTime={1}
      />
    </div>
  );
}