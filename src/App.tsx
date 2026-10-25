import TextInput from "./components/TextInput/TextInput";

export default function App() {

  // Receive text from TextInput
  function handleTextChange(text: string) {
    console.log("Current text:", text);
  }

  return (
    <div>
      <h1>Character Counter</h1>
      <p>Start typing to see your text statistics.</p>

      <TextInput onTextChange={handleTextChange} />
    </div>
  );
}