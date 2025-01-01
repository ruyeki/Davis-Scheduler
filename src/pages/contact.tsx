import React from 'react';
import { useCalendarContext } from './_app';
import { Button } from "@nextui-org/react";
import NavBar from '@/components/NavBar';

export default function ContactPage(){
    return(
        <div>
            <NavBar />
            <h1>Contact Me</h1>
        </div>
    )
}