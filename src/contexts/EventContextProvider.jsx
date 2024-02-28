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
            { currEventDay ? 
                <h2>{format(currEventDay, "MMMM, do - EEEE")}</h2>
                :
                null}
            {events
                .filter(event => {
                    return isSameDay(event.created_at, currEventDay)
                })
                .map(event => {
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