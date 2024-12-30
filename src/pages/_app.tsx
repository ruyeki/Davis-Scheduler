import type { AppProps } from 'next/app';
import React, { createContext, useState, useContext } from 'react';

// Define context type
interface CalendarContextType {
    calendarList: string[];
    setCalendarList: React.Dispatch<React.SetStateAction<string[]>>;
}

// Create default context value
const defaultValue: CalendarContextType = {
    calendarList: [],
    setCalendarList: () => {}
};

export const calendarContext = createContext<CalendarContextType>(defaultValue);

// Custom hook to use the context
export const useCalendarContext = () => useContext(calendarContext);

// App component wrapping all pages with the provider
export default function MyApp({ Component, pageProps }: AppProps) {
    const [calendarList, setCalendarList] = useState<string[]>([]);

    return (
        <calendarContext.Provider value={{ calendarList, setCalendarList }}>
            <Component {...pageProps} /> 
        </calendarContext.Provider>
    );
}

