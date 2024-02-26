import React, { useState, useMemo, useContext } from 'react';
import Modal from '../components/Modal/ModalNoPortal';
import clsx from 'clsx';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday, isSameDay } from 'date-fns';
import EventContext from '../contexts/EventContext';

function Calendar() {
    const { openModal, setOpenModal, setCurrEventDay } = useContext(EventContext);
    // const [openModal, setOpenModal] = useState(false);

    const currentDate = new Date();
    const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    });

    const startingDayIndex = getDay(firstDayOfMonth);
    // using ContextAPI
    const { events } = useContext(EventContext);

    // Date format --> 'yyyy-MM-dd'

    // -- Trying to figure out how to make this component more performant -- usememo -- //
    // const eventsByDate = useMemo(() => {
    //     return events.reduce((acc: { [key: string]: {[{ date: Date, title: string }]} }, event) => {
    //         const dateKey = format(event.date, "yyyy-MM-dd");
    //         if(!acc[dateKey]) {
    //             acc[dateKey] = [];
    //         }
    //         acc[dateKey].push(event);
    //         return acc;
    //     }, {});
    // }, [events]);

  return (
    <div className="event-container container mx-auto p-4">
        <div className="mb-4">
            <h2 className="text-center today">{format(currentDate, "MMMM yyyy")}</h2>
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
                            onClick={() => {
                                setCurrEventDay(day)
                                setOpenModal(!openModal)
                            }}
                            ><p>{format(day, "d")}</p>
                        {events
                            .filter(event => isSameDay(event.created_at, day))
                            .map(event => {
                                return (
                                    <div key={event.title} className={clsx("rounded-md p-2 text-center bg-green-600 m-2")}>
                                        {event.title}
                                    </div>             
                                )
                            })    
                        }
                    </div>
            })}
        </div>
    </div>
  )
}

export default Calendar