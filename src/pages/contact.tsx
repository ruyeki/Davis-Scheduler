import React from 'react';
import { useCalendarContext } from './_app';
import NavBar from '@/components/NavBar';
import { Button, Input, Link } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Textarea} from "@nextui-org/input";
import Layout from '@/app/layout';
import { useContext, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage(){
    const sizes = ["sm", "md", "lg"];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const template = {
            name, email, subject, message
        }

        emailjs.send('service_9h6x0yk', 'template_gbw5yyr', template, '52lkdbbtxTaqhoc6K')
        .then((response) => {
            setEmail('');
            setSubject('');
            setName('');
            setMessage('');

            window.location.reload();
            alert("Email sent successfully");
        })
        .catch((err) => {
            console.log("Failed, ", err);
            alert("Failed to send message. Please try again later.");
        });
    
    }


    return(
        <div>
            <Layout>
            <div className = "ml-20 mt-20 animate-fadeIn flex">
            <div>
            <h1 className = "text-5xl font-bold text-[#FFBF00] mb-4">Contact Me!</h1>
            <p className = "mb-4 text-white">Thank you for your interest in getting in touch!</p>
            <p className = "mb-4 text-white">I value open communication and welcome any inquiries or feedback. <br></br>Please don't hesitate to get in touch with me by filling out the form!</p>
            </div>
            <Card className="mt-4 w-[800px] h-[450px] mb-8 ml-4">
                <form onSubmit = {handleSubmit}>
                <CardBody className = "p-8 mb-8">
                    <div className = "flex mb-4">
                    <Input
                    size = "lg"
                    label= "Name*"
                    className = "w-[400px] mr-4"
                    onChange = {(e) => setName(e.target.value)}
                    required
                    >
                    </Input>

                    <Input
                    size = "lg"
                    type = "email"
                    label= "Email*"
                    className = "w-[400px]"
                    onChange = {(e) => setEmail(e.target.value)}
                    required
                    >
                    </Input>
                    </div>

                    <Input
                    size = "lg"
                    label= "Subject*"
                    className = "mb-4"
                    onChange = {(e) => setSubject(e.target.value)}
                    required
                    >
                    </Input>

                    <Textarea
                    label= "Message*"
                    className = "mb-4"
                    onChange = {(e) => setMessage(e.target.value)}
                    required
                    >
                    </Textarea>

                <div className = "flex justify-center">
                    <Button type = "submit" className = "text-white bg-red-500 w-[800px] flex justify-center items-center">Send</Button>
                </div>


                </CardBody>
                </form>
            </Card>

            </div>
            </Layout>
        </div>
    )
}