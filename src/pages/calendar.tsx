import { useCalendarContext } from '../../_app'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Button, Input } from "@nextui-org/react";

export default function Calendar(){

    const {calendarList, setCalendarList} = useCalendarContext();

    console.log("This is the calendar file: ", calendarList);
    
    const handleDeleteCalendar = () => {
        
    }


    return(
        <div>
            <h1>Calendar</h1>
            {calendarList.length > 0 ? (
                calendarList.map((item, index) =>(
                    <p key = {index}>{item}</p>
                )
            )) : <p>No items in calendar</p>}
        </div>
    )
}