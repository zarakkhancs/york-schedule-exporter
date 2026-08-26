// gives React UI single entry point instead of 4 sepertate ones
// instead of looking at parseRemText, createCalendarEvents, generateICS, downloadICS
export function generateCalendar(rawText: string) {

  const courses = parseRemText(rawText);

  const events = createCalendarEvents(courses);

  const calendarData = generateICS(events);

  downloadICS(calendarData);
}
