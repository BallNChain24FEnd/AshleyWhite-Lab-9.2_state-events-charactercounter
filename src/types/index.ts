// TextInput component props
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// Text statistics
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number;
}

// StatsDisplay component props
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// CharacterCounter component props
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number;
}