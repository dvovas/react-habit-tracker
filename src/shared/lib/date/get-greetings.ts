import dayjs, { type Dayjs } from 'dayjs';

export const getGreeting = (now: Dayjs = dayjs()): string => {
  const hour = now.hour();

  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon';
  } else if (hour >= 17 && hour < 22) {
    return 'Good evening';
  }
  return 'Good night';
};
