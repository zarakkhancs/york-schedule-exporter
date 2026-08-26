"use client";

import { useState } from "react";
import { generateCalendar } from "@/utils/generateCalendar";

export default function Home() {

  // create react state and store what user pastes
  const [rawText, setRawText] = useState("");

  // button handling
  const handleGenerate = () => {
    
    // error if nothing pasted
    if (!rawText.trim()) {
      alert("Please paste your REM schedule.");
      return;
    }
    // otherwise call generateCalendar
    generateCalendar(rawText);
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem"
      }}
    >
      <h1>York Schedule Exporter</h1>

      <p>
        Copy your schedule from York REM and paste it below.
      </p>

      <textarea
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
        placeholder="Paste REM schedule here..."
        style={{
          width: "100%",
          height: "400px",
          padding: "1rem",
          fontSize: "1rem",
          resize: "vertical"
        }}
      />

      <button
        onClick={handleGenerate}
        style={{
          marginTop: "1rem",
          padding: "1rem 2rem",
          fontSize: "1rem",
          cursor: "pointer"
        }}
      >
        Generate Calendar
      </button>
    </main>
  );
}
