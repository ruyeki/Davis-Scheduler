import NavBar from "@/components/NavBar";
import React, { useContext, useState, useEffect } from 'react';
import { Button, Input, Link } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Layout from "@/app/layout";

export default function MissingCourse(){

    const [new_id, setNewId] = useState('');
    const [new_course, setNewCourse] = useState('');
    const [new_section, setNewSection] = useState('');
    const [new_title, setNewTitle] = useState('');
    const [new_instructor, setNewInstructor] = useState('');
    const [new_crn, setNewCrn] = useState('');
    const [new_exam_start_time, setNewExamStartTime] = useState('');
    const sizes = ["sm", "md", "lg"];

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
            window.location.reload();
            alert('Exam added successfully');
        }
    }


    return(
        <div>
            <Layout>
            <div className = "ml-20 mt-20 flex animate-fadeIn">
            <div >
            <h1 className = "text-5xl font-bold text-[#FFBF00] mb-4">Missing Course</h1>
            <p className = "text-white mb-4">If you cannot find the course you are looking for, add it to the database here. <br></br>Once you successfully add the missing course to the database, search for it and add to your calendar. </p>
            </div>
            <Card onSubmit={handleSubmit} className="mt-4 w-[800px] h-[450px] mb-8 flex">
                <CardBody className = "p-8 mb-8">
                <Input
                    type = "number"
                    label = "id"
                    placeholder = "Enter the id"
                    size = "lg"
                    onChange = {(e) => setNewId(e.target.value)}
                    className = "mb-8"
                    required
                >
                </Input>

                <Input
                    type = "number"
                    label = "CRN"
                    placeholder = "Enter the course CRN (e.g. 42202)"
                    size = "lg"
                    onChange = {(e) => setNewCrn(e.target.value)}
                    className = "mb-8"
                    required
                >
                </Input>

                <Input
                    placeholder = "Enter the course name (e.g. ECS 012)"
                    label = "Course Name"
                    size = "lg"
                    onChange = {(e) => setNewCourse(e.target.value)}
                    className = "mb-8"
                    required
                >
                </Input>

                <Input
                    label = "Section Number"
                    placeholder = "Enter the section number (e.g. A01)"
                    size = "lg"
                    onChange = {(e) => setNewSection(e.target.value)}
                    className = "mb-8"
                    required
                >
                </Input>

                <Input
                    label = "Course Title"
                    placeholder = "Enter the section number (e.g. Intro to Programming)"
                    size = "lg"
                    onChange = {(e) => setNewTitle(e.target.value)}
                    className = "mb-8"
                    required
                >
                </Input>

                <Input
                    label = "Instructor's Name"
                    placeholder = "Enter your instructor's name (e.g. Doe, John)"
                    size = "lg"
                    onChange = {(e) => setNewInstructor(e.target.value)}
                    className = "mb-8"
                    required
                >
                </Input>

                <Input
                    type="datetime-local"
                    label = "Date-Time of Final Exam"
                    placeholder = "Enter the date-time of final exam"
                    size = "lg"
                    onChange = {(e) => setNewExamStartTime(e.target.value)}
                    className = "mb-8"
                    required
                >
                </Input>
                <div className = "flex justify-center">
                <Button type = "submit" className = "text-white bg-red-500 w-[800px] flex justify-center items-center">Submit</Button>
                </div>
                </CardBody>
            </Card>
        </div>
        </Layout>
        </div>

    );
}