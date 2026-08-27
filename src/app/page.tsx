"use client";

import { useState } from "react";
import { generateCalendar } from "@/utils/generateCalendar";

export default function Home() {
  // create react state and store what user pastes
  const [rawText, setRawText] = useState("");

  // button handling to generate schedule
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
    // main wrapper with tailwind styling
    <main className="max-w-5xl mx-auto p-6 md:p-12 font-sans text-gray-900">
      
      {/* header section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-red-700 mb-3">
          York REM Schedule Exporter
        </h1>
        <p className="text-lg text-gray-600">
          Instantly convert your York University course details into a calendar file (.ics) for Google Calendar, Apple, Outlook, and more!
        </p>
      </div>

      {/* grid layout to split instructions and text area */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* left column for step-by-step instructions */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-bold mb-4">How to use this tool:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
            <li>Log in to <a href="https://registrar.yorku.ca/enrol/visiting/enrolment" target="_blank" className="text-blue-600 hover:underline font-medium">York REM</a>.</li>
            <li>Select your academic session and click <strong>Continue</strong>.</li>
            <li>Click on <strong>Course Details</strong>.</li>
            <li>Highlight and copy <strong>only</strong> your course list (see image below).</li>
            <li>Paste the text into the box and click Generate.</li>
            
            {/* quick tip for opening the file */}
            <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg text-xs text-red-800">
              <strong>Tip:</strong> Once downloaded, simply open or double-click the <code>.ics</code> file to import it straight into your calendar app.
            </div>

            {/* iphone / apple import troubleshooting tip */}
            <div className="mt-2 p-3 bg-gray-100 border border-gray-200 rounded-lg text-xs text-gray-700">
              <span className="font-semibold text-gray-900">🍎 Apple / iPhone User?</span> If it doesn&apos;t open automatically, you can drag and drop the file into your Calendar app. Check out this <a href="https://www.youtube.com/watch?v=xEaamiZDWuo" target="_blank" className="text-blue-600 hover:underline font-medium">quick video guide</a> for help.
            </div>
          </ol>
          
          {/* image placeholder to show users how to copy */}
          <div className="mt-6 flex flex-col items-center">
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white p-1">
               <img 
                 src="/rem-example.png" 
                 alt="Example of how to highlight course details" 
                 className="w-full h-auto object-cover opacity-95"
               />
            </div>
            <span className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-wider">Example Selection</span>
          </div>
        </div>

        {/* right column for user input */}
        <div className="flex flex-col">
          <label htmlFor="schedule-input" className="text-lg font-semibold mb-2">
            Paste your schedule here:
          </label>
          {/* text area to capture user schedule */}
          <textarea
            id="schedule-input"
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            placeholder="Fall - LE EECS 2031 Cr=3.00 A Lecture-01 MON 19:00 110 min LSB 103..."
            className="flex-grow w-full min-h-[300px] p-4 text-sm font-mono resize-y border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
          />
          {/* generate button */}
          <button
            onClick={handleGenerate}
            className="mt-4 w-full py-4 text-lg font-bold text-white bg-red-700 rounded-lg shadow-md hover:bg-red-800 transition-colors cursor-pointer"
          >
            Generate Calendar (.ics)
          </button>
        </div>
      </div>

      {/* footer section with github links */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500 flex flex-col gap-2">
        <p>
          Built by <a href="https://github.com/zarakkhancs" target="_blank" className="font-semibold text-blue-600 hover:underline">Zarak Khan</a>. 
          Inspired by James Liang & Viktor Stanchev.
        </p>
        <p>
          <a href="https://github.com/zarakkhancs/york-schedule-exporter" target="_blank" className="text-blue-600 hover:underline font-medium">View source code on GitHub</a>
        </p>
      </footer>

    </main>
  );
}