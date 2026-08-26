interface Course {
  term: string; // i.e. Fall, Winter, Fall/Winter, etc.
  courseCode: string; // i.e. LE EECS 2031, SC MATH 1090, AP SOSC 2007, etc.
  credits: number; // i.e. 3.00, 6.00, 4.00, etc.
  section: string; // i.e. A, B, Z, etc.
  meetings: Meeting[]; // stores Meeting objects for Course defined below
}

interface Meeting {
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
  // variable for if this new line is a continuation time of meeting? i.e. lecs, labs, tuts
  // let continuationLine: Meeting | null = null;
  

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
      
        const credits = parseFloat(
          parts[5].replace("Cr=", "")
        );
      
        const section = parts[6];
      
        currentCourse = {
          term,
          courseCode,
          credits,
          section,
          meetings: []
        };
      
        courseArray.push(currentCourse);
      }
      else if(!line.includes("Cr=") && line.includes("-")) {
        console.log("Meeting Header Found");
      }
      else {
        console.log("Continuation Line Found");
      }
  } catch (error) {
    console.error("Error reading or parsing the file:", error);
  }

  // console.log(courseArray.length);

  return courseArray;
}
