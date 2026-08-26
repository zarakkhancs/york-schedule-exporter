interface CalendarEvent {
  title: string;
  day: string;
  startTime: string;
  duration: number;
  location: string;
  term: string;
}

export function createCalendarEvents(courses: Course[]) {

  const events: CalendarEvent[] = []

  for (const course of courses) {

    for (const meeting of course.meetings) {

      const event: CalendarEvent = {
        title: `${course.courseCode} ${meeting.category}`,
        day: meeting.day,
        startTime: meeting.time,
        duration: meeting.duration,
        location: meeting.room,
        term: course.term
      };

      events.push(event);
    }
  }
  return events;
}
