import { clsx } from 'clsx';

import s from './PageToday.module.scss';

export const PageToday = () => {
  const week = [
    { weekDay: 'Mon', weekDate: 28, isToday: false },
    { weekDay: 'Tue', weekDate: 29, isToday: false },
    { weekDay: 'Wed', weekDate: 30, isToday: false },
    { weekDay: 'Thu', weekDate: 1, isToday: false },
    { weekDay: 'Fri', weekDate: 2, isToday: true },
    { weekDay: 'Sat', weekDate: 3, isToday: false },
    { weekDay: 'Sun', weekDate: 4, isToday: false },
  ];
  return (
    <div className={s.pageTodayWrapper}>
      <div className={s.weekCalendar}>
        <ul className={s.calendarList}>
          {week.map((day) => (
            <li key={day.weekDay} className={clsx(s.calendarDay, day.isToday && s.today)}>
              <span className={s.weekDay}>{day.weekDay}</span>
              <span className={s.weekDate}>{day.weekDate}</span>
            </li>
          ),
          )}
        </ul>
      </div>
    </div>
  );
};
