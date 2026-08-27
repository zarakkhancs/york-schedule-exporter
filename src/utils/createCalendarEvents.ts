import { getFirstOccurrence } from "./getFirstOccurrence";
import { getTermDates } from "./getTermDates";
import { Course } from "./parseRemText";

export interface CalendarEvent {
  title: string;
  day: string;
  startTime: string;
  duration: number;
  location: string;
  term: string;
  startDate: Date;
  endDate: Date;
  firstOccurrence: Date;
}

export function createCalendarEvents(courses: Course[]) {
  // array events to return after function ends
  const events: CalendarEvent[] = []
  // loop through each course and its meetings
  for (const course of courses) {
    // get term date for each course
    const termDates = getTermDates(course.term);
      
    for (const meeting of course.meetings) {
      // Calculate the first occurrence specifically for THIS meeting's day
      const firstOccurrence = getFirstOccurrence(
        meeting.day,
        termDates.startDate
      );
      // create the calendar event
      const event: CalendarEvent = {
        title: `${course.courseCode} ${meeting.category}`,
        day: meeting.day,
        startTime: meeting.time,
        duration: meeting.duration,
        location: meeting.room,
        term: course.term,
        startDate: termDates.startDate,
        endDate: termDates.endDate,
        firstOccurrence: firstOccurrence
      };
      // push this created event to our events array
      events.push(event);
    }
  }
  return events;
}

