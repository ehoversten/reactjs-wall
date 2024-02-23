import React, {useState} from 'react';
import clsx from 'clsx';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday, isSameDay } from 'date-fns';

function Calendar() {
    const currentDate = new Date();
    const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    });

    const startingDayIndex = getDay(firstDayOfMonth);

    const [events, setEvents] = useState([
        { date: '2024-02-12', title: 'ballz' }, 
        { date: '2024-02-25', title: 'bingo' }, 
        { date: '2024-02-04', title: 'tinker' }, 
    ]);
    // event object structure { date: Date, title: String }
    // Date format --> 'yyyy-MM-dd'

  return (
    <div className="event-container container mx-auto p-4">
        <div className="mb-4">
            <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
        </div>
        <div className="grid grid-cols-7 gap-2">
            {WEEKDAYS.map(day => {
                return <div key={day}>{day}</div>
            })}
            {Array.from({ length: startingDayIndex }).map((_, index) => {
                return <div key={`empty-${index}`} className=""></div>
            })}
            {daysInMonth.map((day, index) => {
                return <div 
                            key={index}
                            className={clsx("border rounded-md p-2 text-center hover:bg-violet-600", {
                                "bg-gray-200": isToday(day),
                                "text-gray-900": isToday(day)
                            })}
                        >{format(day, "d")}
                        {events
                            .filter(event => isSameDay(event.date, day))
                            .map(event => {
                                return <div key={event.title}>{event.title}</div>
                            })    
                        }
                        </div>
            })}
        </div>
    </div>
  )
}

export default Calendar