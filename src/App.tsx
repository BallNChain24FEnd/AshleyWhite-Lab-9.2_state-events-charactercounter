import TextInput from "./components/TextInput/TextInput";
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";

export default function App() {

  // Receive text from TextInput
  function handleTextChange(text: string) {
    console.log("Current text:", text);
  }

  // Sample statistics
  const stats = {
    characterCount: 25,
    wordCount: 5,
    readingTime: 0.03,
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <p>Start typing to see your text statistics.</p>

      <TextInput onTextChange={handleTextChange} />

      <StatsDisplay stats={stats} />
    </div>
  );
}