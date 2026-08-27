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
    <main className="max-w-4xl mx-auto p-8 font-sans text-gray-900">
      <h1 className="text-3xl font-bold mb-2">York Schedule Exporter</h1>

      <p className="text-gray-600 mb-6">
        Copy your schedule from York REM and paste it below.
      </p>

      <textarea
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
        placeholder="Paste REM schedule here..."
        className="w-full h-[400px] p-4 text-base resize-y border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />

      <button
        onClick={handleGenerate}
        className="mt-6 px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Generate Calendar
      </button>
    </main>
  );
}
