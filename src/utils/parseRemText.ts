export interface Course {
  term: string; // i.e. Fall, Winter, Fall/Winter, etc.
  courseCode: string; // i.e. LE EECS 2031, SC MATH 1090, AP SOSC 2007, etc.
  credits: number; // i.e. 3.00, 6.00, 4.00, etc.
  section: string; // i.e. A, B, Z, etc.
  meetings: Meeting[]; // stores Meeting objects for Course defined below
}

export interface Meeting {
  category: string; // i.e. Lecture, Laboratory, Seminar, etc.
  category_section: string; // i.e. 01, 02, 10, etc.
  day: string; // i.e. MON, WED, THU, etc.
  time: string; // i.e. 19:00, 13:30, 8:30, etc.
  duration: number; // i.e. 110 min, 170 min, 80 min, etc.
  room: string; // i.e. LSB 103, LAS 1006, RN 120, etc.
}

export function parseRemText(rawText: string): Course[] {
  // course array to loop and parse text
  const courseArray: Course[] = [];
  // variable for if this new line is a course?
  let currentCourse: Course | null = null;
  // variable for if this new line is a meeting?
  let currentMeetingCat: string | null = null;
  // variable for new line section?
  let currentMeetingSection: string | null = null;

  try {
    // 1. Split the text into lines, handling both Windows (\r\n) and UNIX (\n) line endings
    const lines: string[] = rawText.split(/\r?\n/);

    // 2. Loop through each line using a for...of loop
    for (const line of lines) {
      // detect what type of new line this is, 3 options...
      // A. this line is a course header
      if (line.includes("Cr=")) {
        const parts = line.trim().split(/\s+/);
      
        const term = parts[0];
        const courseCode = `${parts[2]} ${parts[3]} ${parts[4]}`;
        const credits = parseFloat(parts[5].replace("Cr=", ""));
        const section = parts[6];
      
        currentCourse = {
          term,
          courseCode,
          credits,
          section,
          meetings: []
        };
      
        courseArray.push(currentCourse);

        // FIX: Check if a meeting is attached to the same line
        if (parts.length > 7) {
          const [category, category_section] = parts[7].split("-");
          const day = parts[8];
          const time = parts[9];
          const duration = parseInt(parts[10]);
          const room = parts.slice(12).join(" "); // skip "min" at index 11
          
          currentMeetingCat = category;
          currentMeetingSection = category_section;
          
          currentCourse.meetings.push({
            category,
            category_section,
            day,
            time,
            duration,
            room
          });
        }
      }
      else if (!line.includes("Cr=") && line.includes("-")) {

        const tokens = line.trim().split(/\s+/);
      
        const [category, category_section] = tokens[0].split("-");
      
        const day = tokens[1];
      
        const time = tokens[2];
      
        const duration = parseInt(tokens[3]);
      
        const room = tokens.slice(5).join(" ");
      
        currentMeetingCat = category;
        currentMeetingSection = category_section;
      
        const meeting: Meeting = {
          category,
          category_section,
          day,
          time,
          duration,
          room
        };
      
        if (currentCourse) {
          currentCourse.meetings.push(meeting);
        }
      }
      else {
        const tokens = line.trim().split(/\s+/);
      
        const day = tokens[0];
      
        const time = tokens[1];
      
        const duration = parseInt(tokens[2]);
      
        const room = tokens.slice(4).join(" ");
      
        const meeting: Meeting = {
          category: currentMeetingCat || "",
          category_section: currentMeetingSection || "",
          day,
          time,
          duration,
          room
        };
      
        if (currentCourse) {
          currentCourse.meetings.push(meeting);
        }
      }
      }
  } catch (error) {
    console.error("Error reading or parsing the file:", error);
  }

  // console.log(courseArray.length);

  return courseArray;
}
