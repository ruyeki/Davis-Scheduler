import { Button, Input } from "@nextui-org/react";
import React, { useContext, useState, useEffect } from 'react';
import { useCalendarContext } from './_app';
import { useRouter } from 'next/router';
import { calendarContext } from "./_app";
import NavBar from "@/components/NavBar";

export default function Search() {
    const [courseValue, setCourseValue] = useState<any[]>([]);
    const [courseInput, setCourseInput] = useState('');
    const [courseDisplay, setCourseDisplay] = useState('');
    const [addCalendarBtn, setAddCalendarBtn] = useState(false);
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
            setCourseDisplay("Course has already been added");
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
            <NavBar/>
            <div>
                {courseDisplay ? <h1>Results</h1> : <h1>Search</h1>}
            </div>

            <Input
                value={courseInput}
                onChange={(e) => setCourseInput(e.target.value)}
                placeholder="Enter Course"
            />

            <Button
                variant="bordered"
                className="w-[250px] h-[40px] font-semibold border-[#06B7DB] border-2 text-[#06B7DB] transition-all duration-300 hover:bg-[#06B7DB] hover:text-white hover:shadow-xl hover:scale-105"
                onPress={handleSubmit}
            >
                Search Exams
            </Button>

            {courseDisplay && <p>{courseDisplay}</p>}

            {addCalendarBtn && (
                <Button
                    onPress={() => {
                        handleAddCalendar();
                    }}
                >
                    Add to Calendar
                </Button>
            )}

        </div>
    );
}
