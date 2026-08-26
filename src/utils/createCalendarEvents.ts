interface CalendarEvent {
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
    const termDates = getTermDates(course.term);
    const firstOccurrence =
      getFirstOccurrence(
        meeting.day,
        termDates.startDate
      );
    for (const meeting of course.meetings) {
      // get term date range depending on course term
      
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

