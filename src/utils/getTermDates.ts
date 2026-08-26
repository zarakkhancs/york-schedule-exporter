export interface TermDates 
{
startDate: Date;
endDate: Date;
}

export function getTermDates(term: string): TermDates 
{
  switch (term) {
    // September 9th to December 8th
    case "Fall":
      return {
        startDate: new Date(2026, 8, 9), // September 9th
        endDate: new Date(2026, 11, 8) // December 8th
      };
    // January 4th to April 5th
    case "Winter":
      return {
        startDate: new Date(2027, 0, 4), // January 4th
        endDate: new Date(2027, 3, 5) // April 5th
      };
    // September 9th to April 5th
    case "Fall/Winter":
      return {
        startDate: new Date(2026, 8, 9), // September 9th
        endDate: new Date(2027, 3, 5) // April 5th
      };
          
    default:
      throw new Error(`Unknown term: ${term}`);
  }
}
