export function getRecurrenceDay(day: string): string {

  switch(day) {

    case "MON":
      return "MO";

    case "TUE":
      return "TU";

    case "WED":
      return "WE";

    case "THU":
      return "TH";

    case "FRI":
      return "FR";

    default:
      throw new Error(`Unknown day: ${day}`);
  }
}
