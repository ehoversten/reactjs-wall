import React, { useState } from 'react';
import EventContext from './EventContext';
import testEvents from '../data/events';
import Modal from '../components/Modal/Modal';
import { format, isSameDay, getDay } from 'date-fns';

const EventContextProvider = ({children}) => {
    const [events, setEvents] = useState(testEvents);
    const [currEventDay, setCurrEventDay] = useState(null);
    const [openModal, setOpenModal] = useState(false);

  return (
    <EventContext.Provider value={{ events, setEvents, openModal, setOpenModal, setCurrEventDay }}>
        {children}
        <Modal open={openModal} close={setOpenModal}>
            <h2>{format(currEventDay, "MMMM, do - EEEE")}</h2>
            {events
                .filter(event => {
                    // console.log(event.created_at);
                    // console.log(currEventDay)
                    // console.log(format(event.created_at, "yyyy-MM-dd"));
                    // console.log("getDay: ", getDay(currEventDay))
                   // console.log(isSameDay(format(event.created_at, "yyyy-MM-dd"), format(currEventDay, "yyyy-MM-dd")))
                    // console.log(isSameDay(event.created_at, currEventDay))
                    return isSameDay(event.created_at, currEventDay)
                })
                .map(event => {
                    console.log("Event: ", event);
                    return (
                        <div key={event.title} className="event-modal">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>             
                    )
                })    
            }
        </Modal>
    </EventContext.Provider>
  )
}

export default EventContextProvider;