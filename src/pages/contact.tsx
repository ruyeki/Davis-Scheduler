import React from 'react';
import { useCalendarContext } from './_app';
import NavBar from '@/components/NavBar';
import { Button, Input, Link } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

export default function ContactPage(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-[#002855] via-[#002855] to-[#FFBF00]">
            <NavBar />
            <div className = "ml-20 mt-20 animate-fadeIn">
            <h1 className = "text-5xl font-bold text-[#FFBF00] mb-4">Contact Me</h1>
            <div className = "text-white">
            <p className = "mb-4">Thank you for your interest in getting in touch!</p>
            <p>I value open communication and welcome any inquiries, feedback, or <br></br> collaboration opportunities. Please don't hesitate to get in touch with <br></br> me by filling out the contact form, especially if you find any errors!</p>



            </div>
            </div>
        </div>
    )
}