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

    const handleExportCalendar = () =>{
        
    }   

    return (
        <div>
            <NavBar/>
            <h1>Calendar</h1>
            {calendarList.length > 0 ? (
                <>
                    <h1>Calendar</h1>
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

            <Button onPress = {handleExportCalendar}>Export Calendar</Button>
        </div>
    );
}
