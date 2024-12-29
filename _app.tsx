import React, { useContext, createContext, useState } from 'react';
import Search from './src/pages/search';
import Calendar from './src/pages/calendar';
import type { AppProps } from 'next/app';

interface CalendarContextType {
    calendarList: any[];
    setCalendarList: React.Dispatch<React.SetStateAction<any[]>>;
}

// Provide default empty values to prevent undefined context
const defaultValue: CalendarContextType = {
    calendarList: [],
    setCalendarList: () => {}
};

export const calendarContext = createContext<CalendarContextType>(defaultValue);

// Custom hook to access the context
export const useCalendarContext = () => {
    const context = useContext(calendarContext);
    return context;
};

export default function App({ Component, pageProps }: AppProps) {
    const [calendarList, setCalendarList] = useState<any[]>([]);

    return (
        <calendarContext.Provider value={{ calendarList, setCalendarList }}>
            <Component {...pageProps} />
        </calendarContext.Provider>
    );
}
