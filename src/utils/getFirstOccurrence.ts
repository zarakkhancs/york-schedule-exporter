export function getFirstOccurrence(
  day: string,
  startDate: Date
): Date 
{
  // convert York REM day names into JavaScript day numbers
  // Sunday = 0, Monday = 1, Tuesday = 2, etc.
  const dayMap: Record<string, number> = {
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5
  };
  // meeting day converted into a JavaScript day number
  const targetDay = dayMap[day];
  // get what day the semester starts on
  const currentDay = startDate.getDay();
  // calculate how many days forward we need to move
  // i.e. if semester starts on Wednesday and class is Monday,
  // move forward 5 days to next Monday
  const daysToAdd =
    (targetDay - currentDay + 7) % 7;
  // create copy of semester start date since we don't want to accidentally modify startDate for every future calculations
  const firstOccurrence = new Date(startDate);
  // move date forward by calculated amount
  firstOccurrence.setDate(
    firstOccurrence.getDate() + daysToAdd
  );
  // return first date that class actually occurs
  return firstOccurrence;
}
