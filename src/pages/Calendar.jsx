import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

function Calendar() {
    const currentDate = new Date();
    const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    })
  return (
    <div className="event-container">
        <div>
            <h2 className='text-center'>{format(currentDate, "MMMM yyyy")}</h2>
        </div>
        <div className="grid-container">
            {WEEKDAYS.map(day => {
                return <div key={day}>{day}</div>
            })}
            {daysInMonth.map((day, index) => {
                return <div key={index}>{format(day, "d")}</div>
            })}
        </div>
    </div>
  )
}

export default Calendar