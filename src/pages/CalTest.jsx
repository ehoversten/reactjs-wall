import React, { useState, useMemo } from 'react';
import Modal from '../components/Modal/ModalNoPortal';
import clsx from 'clsx';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday, isSameDay } from 'date-fns';
import { useContext } from 'react';
import EventContext from '../contexts/EventContext';

function Calendar() {
    const [openModal, setOpenModal] = useState(false);

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

    // const [events, setEvents] = useState([
    //     { date: '2024-02-12', title: 'ballz', description: 'ting tang walla walla bing bang' }, 
    //     { date: '2024-02-25', title: 'bingo' }, 
    //     { date: '2024-02-04', title: 'tinker' }, 
    // ]);
    // event object structure { date: Date, title: String }
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
                            onClick={() => setOpenModal(!openModal)}
                        >{format(day, "d")}
                        {events
                            .filter(event => isSameDay(event.created_at, day))
                            .map(event => {
                                return (
                                    <>
                                        <div key={event.title}>
                                            {event.title}
                                        </div>             
                                        <Modal open={openModal} close={setOpenModal}>
                                            {events
                                                .filter(event => isSameDay(event.created_at, day))
                                                .map(event => {
                                                    return (
                                                        <div key={event.title}>
                                                            {event.title}
                                                        </div>
                                                    )
                                                })    
                                            }
                                        </Modal>
                                    </>
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