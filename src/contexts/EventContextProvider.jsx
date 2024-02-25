import React, { useState } from 'react';
import EventContext from './EventContext';
import testEvents from '../data/events';

const EventContextProvider = ({children}) => {
    const [events, setEvents] = useState(testEvents);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
        {children}
    </EventContext.Provider>
  )
}

export default EventContextProvider;