import React from 'react';
import { useCalendarContext } from './_app';
import { Button } from "@nextui-org/react";
import NavBar from '@/components/NavBar';

export default function Calendar() {
    const { calendarList, setCalendarList } = useCalendarContext();

    console.log("Calendar list on calendar page, ", calendarList);

    const handleRemoveCalendar = (index: number) => {
        setCalendarList((prev) => prev.filter((_, i) => i !== index));
    };

    const generateGoogleCalendarLink = (title: string, startTime: string, endTime: string, location = '', description = '') => {
        const start = new Date(startTime).toISOString().replace(/-|:|\.\d+/g, '');
        const end = new Date(endTime).toISOString().replace(/-|:|\.\d+/g, '');
    
        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
    };
    
    const title = 
    const startTime = calendarList.
    const endTime = '2024-12-31T12:00:00';

    const calendarLink = generateGoogleCalendarLink(title, startTime, endTime, location, description);


    return (
        <div>
            <NavBar/>
            <h1>Calendar</h1>
            {calendarList.length > 0 ? (
                <> 
                    {calendarList.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                            <Button onPress={() => handleRemoveCalendar(index)}>
                                Remove
                            </Button>
                        </div>
                    ))}
                </>
            ) : (
                <p>No items in calendar</p>
            )}

            <a href = {calendarLink}>
                <Button>Export Calendar </Button>
            </a>
        </div>
    );
}
