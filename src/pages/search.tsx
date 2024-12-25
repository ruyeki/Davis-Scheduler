import { Button, Input } from "@nextui-org/react";
import React, { useContext, useState, useEffect } from 'react';


export default function Search() {

    const [course, setCourse] = useState('');

    const fetchCourses = async() => {
        const response  = await fetch('/api/getCourses');
        const courses = await response.json();
        console.log(courses);


    }

    return(
        <div>
            <h1>Search</h1>

            <Input
            value = {course}
            onChange = {(e)=>setCourse(e.target.value)}
            placeholder = "Enter Course"
            ></Input>


            <Button
                variant="bordered"
                className="w-[250px] h-[40px] font-semibold border-[#06B7DB] border-2 text-[#06B7DB] transition-all duration-300 hover:bg-[#06B7DB] hover:text-white hover:shadow-xl hover:scale-105"
                onPress={fetchCourses}
            >Search Exams</Button>
        </div>
    )


}