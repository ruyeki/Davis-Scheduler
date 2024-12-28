import { Button, Input } from "@nextui-org/react";
import React, { useContext, useState, useEffect } from 'react';


export default function Search() {

    const [courseValue, setCourseValue] = useState<any[]>([]);
    const [courseInput, setCourseInput] = useState('');
    const [courseDisplay, setCourseDisplay] = useState('');
    const [addCalendarBtn, setAddCalendarBtn] = useState(false);
    const [calendarList, setCalendarList] = useState<any[]>([]);

        // Fetch courses on component mount
        useEffect(() => {
            fetchCourses();
        }, []);

    const fetchCourses = async() => {
        const response  = await fetch('/api/getCourses');
        const courses = await response.json();
        setCourseValue(courses);
        console.log(courses);
    }

    const handleSubmit = () => {
        const foundCourse = courseValue.find(courses => courses.course === courseInput);
        if(foundCourse){
            //display on page
            setCourseDisplay(`Course: ${foundCourse.course}, Title: ${foundCourse.title}, Section: ${foundCourse.section}, Instructor: ${foundCourse.instructor}, Exam Time: ${foundCourse.exam_start_time}`);
            setAddCalendarBtn(true);

        }else{
            setCourseDisplay("Cannot find course");
            setAddCalendarBtn(false);
        }
    }

    const handleAddCalendar = () => {
        setCalendarList(courseValue);
        console.log("This is the calendarList: ", calendarList);

    }



    return(
        <div>
            <h1>Search</h1>

            <Input
            value = {courseInput}
            onChange = {(e)=>setCourseInput(e.target.value)}
            placeholder = "Enter Course"
            ></Input>


            <Button
                variant="bordered"
                className="w-[250px] h-[40px] font-semibold border-[#06B7DB] border-2 text-[#06B7DB] transition-all duration-300 hover:bg-[#06B7DB] hover:text-white hover:shadow-xl hover:scale-105"
                onPress={handleSubmit}
            >Search Exams</Button>

            {courseDisplay && <p>{courseDisplay}</p>}

            {addCalendarBtn && <Button 
                onPress = {()=>{

                    if(handleAddCalendar){
                        handleAddCalendar();
                    }

                    window.location.href = '/calendar';

                }}>Add to Calendar</Button>}

        </div>
    )


}