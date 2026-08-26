interface CalendarEvent {
  title: string;
  day: string;
  startTime: string;
  duration: number;
  location: string;
  term: string;
}

export function createCalendarEvents(courses: Course[]) {
  // array events to return after function ends
  const events: CalendarEvent[] = []

  // loop through each course and its meetings
  for (const course of courses) {
    for (const meeting of course.meetings) {
      // create the calendar event
      const event: CalendarEvent = {
        title: `${course.courseCode} ${meeting.category}`,
        day: meeting.day,
        startTime: meeting.time,
        duration: meeting.duration,
        location: meeting.room,
        term: course.term
      };
      // push this created event to our events array
      events.push(event);
    }
  }
  return events;
}

export function generateICS(events: CalendarEvent[])
{

}
