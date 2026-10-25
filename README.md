# Character Counter — Lab 9.2

## Project Description
A React and TypeScript application that tracks text statistics while users type. Built with Vite and Tailwind CSS to practice state management, event handling, and component communication.

## Features
1. Real-time character counting.
2. Automatic word counting.
3. Estimated reading time.
4. Word-count goals with a progress bar.
5. Responsive layout with visual feedback.

## How to Run
After cloning or download this repository, open the project folder in VS Code.
1. Run `npm install`.
2. Run `npm run dev`.
3. Open the localhost URL shown in the terminal.
4. Run `npm run build` to verify production build.

## Component Use
- **TextInput:** Accepts text and sends changes through a callback.
- **StatsDisplay:** Displays character count, word count, and reading time.
- **CharacterCounter:** Manages state and connects both components.

## Reflection Questions

**1. How did you handle state updates?**

I used `useState` to track the text and statistics. An `onChange` event updates the state whenever the user types.

**2. How did you calculate reading time?**

I divided the word count by 200, using an estimated reading speed of 200 words per minute.

**3. How did you keep the UI responsive?**

React updates the displayed statistics when state changes. The calculations are simple, so the interface responds quickly.

**4. What challenges did you face?**

Handling empty input and extra spaces required additional checks. I used `trim()` and `split()` to calculate words correctly.

## Technologies
React, TypeScript, Vite, Tailwind CSS