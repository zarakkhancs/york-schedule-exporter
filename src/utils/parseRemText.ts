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
