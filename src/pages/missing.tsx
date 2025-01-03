import NavBar from "@/components/NavBar";
import React, { useContext, useState, useEffect } from 'react';
import { Button, Input, Link } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
export default function MissingCourse(){

    const [new_id, setNewId] = useState('');
    const [new_course, setNewCourse] = useState('');
    const [new_section, setNewSection] = useState('');
    const [new_title, setNewTitle] = useState('');
    const [new_instructor, setNewInstructor] = useState('');
    const [new_crn, setNewCrn] = useState('');
    const [new_exam_start_time, setNewExamStartTime] = useState('');

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        const newCourse = {
            id: parseInt(new_id),
            course: new_course,
            section: new_section,
            title: new_title,
            instructor: new_instructor,
            crn: parseInt(new_crn),
            exam_start_time: new Date(`${new_exam_start_time}:00Z`)
        }
        const response = await fetch('/api/addCourses', {
            method: 'POST',
            body: JSON.stringify(newCourse),
            headers: {
                'Content-Type': 'application/json',
              },
        })

        console.log("This is the response ", response);

        if(response.ok){
            alert('Exam added successfully');
        }
    }


    return(
        <div className="min-h-screen bg-gradient-to-br from-[#002855] via-[#002855] to-[#FFBF00]">
            <NavBar />
            <div className = "ml-20 mt-20 animate-fadeIn">
            <h1 className = "text-5xl font-bold text-[#FFBF00] mb-4">Missing Course</h1>
            <p className = "text-white">If you cannot find the course you are looking for, add it to the database here. </p>
            <Card onSubmit={handleSubmit} className="mt-4 w-[1000px] h-[450px]">
                <CardBody>
                <Input
                    type = "number"
                    placeholder = "ID"
                    onChange = {(e) => setNewId(e.target.value)}
                    className = "mb-4"
                >
                </Input>

                <Input
                    type = "number"
                    placeholder = "CRN"
                    onChange = {(e) => setNewCrn(e.target.value)}
                    className = "mb-4"
                >
                </Input>

                <Input
                    placeholder = "Course"
                    onChange = {(e) => setNewCourse(e.target.value)}
                    className = "mb-4"
                >
                </Input>

                <Input
                    placeholder = "Section"
                    onChange = {(e) => setNewSection(e.target.value)}
                    className = "mb-4"
                >
                </Input>

                <Input
                    placeholder = "Title"
                    onChange = {(e) => setNewTitle(e.target.value)}
                    className = "mb-4"
                >
                </Input>

                <Input
                    placeholder = "Instructor"
                    onChange = {(e) => setNewInstructor(e.target.value)}
                    className = "mb-4"
                >
                </Input>

                <Input
                type="datetime-local"
                    placeholder = "Exam Start Time"
                    onChange = {(e) => setNewExamStartTime(e.target.value)}
                    className = "mb-4"
                >
                </Input>
                <div className = "flex justify-center">
                <Button type = "submit" className = "text-white bg-red-500 w-[400px] flex justify-center items-center">Submit</Button>
                </div>
                </CardBody>
            </Card>
        </div>
        </div>

    );
}