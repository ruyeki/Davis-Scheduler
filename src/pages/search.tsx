import { Button, Link } from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import React, { useContext, useState, useEffect } from 'react';
import { useCalendarContext } from './_app';
import { useRouter } from 'next/router';
import { calendarContext } from "./_app";
import NavBar from "@/components/NavBar";
import Layout from "@/app/layout";

export default function Search() {
    const [courseValue, setCourseValue] = useState<any[]>([]);
    const [courseInput, setCourseInput] = useState('');
    const [courseDisplay, setCourseDisplay] = useState('');
    const [addCalendarBtn, setAddCalendarBtn] = useState(false);
    const sizes = ["sm", "md", "lg"];
    interface CalendarItem {
        course: string;
    }

    const { calendarList, setCalendarList } = useContext(calendarContext);


    const router = useRouter();

    // Fetch courses on component mount
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('/api/getCourses');
            const courses = await response.json();
            setCourseValue(courses);
            console.log(courses);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const handleSubmit = () => {
        const foundCourse = courseValue.find(c => c.course === courseInput);
        if (foundCourse) {
            setCourseDisplay(`Course: ${foundCourse.course}, Title: ${foundCourse.title}, Section: ${foundCourse.section}, Instructor: ${foundCourse.instructor}, Exam Time: ${foundCourse.exam_start_time}`);
            setAddCalendarBtn(true);
        } 
        else {
            setCourseDisplay("No results found for the given search, please try again!");
            setAddCalendarBtn(false);
        }
    };

    const handleAddCalendar = () => {
        const foundCourse = courseValue.find(c => c.course === courseInput);
        const isAlreadyInCalendar = calendarList.some(item => item.includes(foundCourse.course)); //some function returns true if one item matches condition

        if(isAlreadyInCalendar){
            setCourseDisplay("Course has already been added.");
        } else{
            calendarList.push(`Course: ${foundCourse.course}, Title: ${foundCourse.title}, Section: ${foundCourse.section}, Instructor: ${foundCourse.instructor}, Exam Time: ${foundCourse.exam_start_time}`);
            setCalendarList(calendarList);
            console.log("Calendar list on search page, " ,calendarList);
            router.push(
                '/calendar'
            )
        }
    };

    return (
        <div>
        <Layout>
        <div className = "ml-20 animate-fadeIn">
            <div>
                {courseDisplay ? <h1 className = "text-5xl font-bold text-[#FFBF00] mb-4 mt-20">Results</h1> : <h1 className = "text-5xl font-bold text-[#FFBF00] mb-4 mt-20">Search</h1>}
            </div>

            <p className = "text-lg text-white mb-2">Find your exam schedule by entering the course code (e.g. ECS 012).</p>
            <p className = "text-lg text-white mb-10">To add an exam to your calendar, simply click the button. Once you are done, go to the <br></br> Calendar section and export your personalized schedule!</p>
        <div className = "flex items-center space-x-3 mb-2">
            <Input
                value={courseInput}
                className = "w-[300px]"
                onChange={(e) => setCourseInput(e.target.value)}
                size = "md"
                label = "Enter the course code"
            />

            <Button
                variant="bordered"
                className="w-[100px] h-[60px] font-semibold border-[#FFBF00] border-2 text-[#FFBF00] transition-all duration-300 hover:bg-[#FFBF00] hover:text-white hover:shadow-xl hover:scale-105"
                onPress={handleSubmit}
            >
                Search
            </Button>
        </div>

        <div
            onClick={() => router.push('/missing')}
            className="text-blue-500 cursor-pointer"
        >
            Can't find your course?
        </div>

            <div className = "flex items-center space-x-3 mb-2">
            {courseDisplay && <p className = "mt-10 text-white">{courseDisplay}</p>}

            {addCalendarBtn && (
                <Button
                    onPress={() => {
                        handleAddCalendar();
                    }}

                    className = "mt-10 bg-red-500 text-white w-[25px]"
                >
                    Add
                </Button>
            )}
            </div>
            
        </div>
        </Layout>
        </div>
    );
}