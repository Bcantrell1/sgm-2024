import { Timestamp } from 'firebase/firestore';

export function formatDate(date: Timestamp | Date | string | number | { seconds: number, nanoseconds: number }): string {
  let dateObject: Date;

  if (date instanceof Timestamp) {
    dateObject = date.toDate();
  } else if (date instanceof Date) {
    dateObject = date;
  } else if (typeof date === 'number') {
    dateObject = new Date(date);
  } else if (typeof date === 'string') {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      dateObject = parsedDate;
    } else {
      return 'Invalid Date';
    }
  } else if (typeof date === 'object' && 'seconds' in date && 'nanoseconds' in date) {
    dateObject = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
  } else {
    return 'Invalid Date';
  }

  return dateObject.toLocaleDateString();
}