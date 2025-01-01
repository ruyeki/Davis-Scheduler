import NavBar from "@/components/NavBar";
import React, { useContext, useState, useEffect } from 'react';
import { Button, Input, Link } from "@nextui-org/react";

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
        <div>
            <NavBar />
            <h1>Missing Course</h1>
            <h2>If you cannot find the course you are looking for, add it to the database here. </h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type = "number"
                    placeholder = "ID"
                    onChange = {(e) => setNewId(e.target.value)}
                >
                </Input>

                <Input
                    type = "number"
                    placeholder = "CRN"
                    onChange = {(e) => setNewCrn(e.target.value)}
                >
                </Input>

                <Input
                    placeholder = "Course"
                    onChange = {(e) => setNewCourse(e.target.value)}
                >
                </Input>

                <Input
                    placeholder = "Section"
                    onChange = {(e) => setNewSection(e.target.value)}
                >
                </Input>

                <Input
                    placeholder = "Title"
                    onChange = {(e) => setNewTitle(e.target.value)}
                >
                </Input>

                <Input
                    placeholder = "Instructor"
                    onChange = {(e) => setNewInstructor(e.target.value)}
                >
                </Input>

                <Input
                type="datetime-local"
                    placeholder = "Exam Start Time"
                    onChange = {(e) => setNewExamStartTime(e.target.value)}
                >
                </Input>

                <Button type = "submit">Submit</Button>

            </form>
        </div>

    );
}