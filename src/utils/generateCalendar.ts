// gives React UI single entry point instead of 4 sepertate ones

import { createCalendarEvents } from "./createCalendarEvents";
import { downloadICS, generateICS } from "./generateICS";
import { parseRemText } from "./parseRemText";

// instead of looking at parseRemText, createCalendarEvents, generateICS, downloadICS
export function generateCalendar(rawText: string) {

  const courses = parseRemText(rawText);

  const events = createCalendarEvents(courses);

  const calendarData = generateICS(events);

  // Check if calendarData successfully generated a string before downloading
  if (calendarData) {
    downloadICS(calendarData);
  } else {
    // Give the user feedback if something goes wrong
    alert("Failed to generate the calendar file. Please check your schedule formatting.");
    console.error("Calendar generation returned null.");
  }
}
