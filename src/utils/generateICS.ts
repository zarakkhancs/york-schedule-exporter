import { createEvents, EventAttributes } from "ics";
import { getRecurrenceDay } from "./getRecurrenceDay";
import { CalendarEvent } from "./createCalendarEvents";

export function generateICS(events: CalendarEvent[]): string | null {
  // FIXED: Replace any[] with proper ICS event type
  const icsEvents: EventAttributes[] = [];
  for (const event of events) {
    // for each event convert time time, i.e 11:30 = 11 hour and 30 minute
    // we put it in an array format using split and map and convert string to Number
    const [hour, minute] =
      event.startTime
        .split(":")
        .map(Number);

    // set reccurrence day using helper
    const recurrenceDay =
    getRecurrenceDay(event.day);

    // set until date for reccurrence
    const untilDate =
      event.endDate
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";
    
    // now utlize helper function getFirstOccurence to find 
    // first day this event starts and build ICS event
    const firstDate = event.firstOccurrence;
    icsEvents.push({
    title: event.title,
  
    location: event.location,
  
    start: [
      firstDate.getFullYear(),
      // since JavaScript months are 0-11
      // whereas ICS expects 1-12
      firstDate.getMonth() + 1,
      firstDate.getDate(),
      hour,
      minute
    ],
  
    duration: {
      minutes: event.duration
    },

    recurrenceRule:
      `FREQ=WEEKLY;BYDAY=${recurrenceDay};UNTIL=${untilDate}`
  });
  }
  // loop is over now we generate the calendar
  const { error, value } =
  createEvents(icsEvents);
  // error handling
  if (error) {
    throw error;
  }
  // return Calendar Text
  return value || null;
}

export function downloadICS(calendarData: string) {
  const blob = new Blob(
    [calendarData],
    { type: "text/calendar;charset=utf-8" }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "schedule.ics";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
