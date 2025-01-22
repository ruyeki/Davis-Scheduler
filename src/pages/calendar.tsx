import React from 'react';
import { useCalendarContext } from './_app';
import { Button } from "@nextui-org/react";
import NavBar from '@/components/NavBar';
import Layout from '@/app/layout';

export default function Calendar() {
    const { calendarList, setCalendarList } = useCalendarContext();

    console.log("Calendar list on calendar page, ", calendarList);

    const handleRemoveCalendar = (index: number) => {
        setCalendarList((prev) => prev.filter((_, i) => i !== index));
    };

    const parseCalendarLink = (item: string) =>{
        const parts = item.split(',');
        const course = parts[0]?.replace('Course: ', '') || 'N/A';
        const title = parts[1]?.replace('Title: ', '') || 'N/A';
        const examTime = parts.find(part => part.includes('Exam Time: ', ))?.replace('Exam Time: ','') || 'N/A';

        return {course, title, examTime};
    }

    const generateGoogleCalendarLink = (title: string, startTime: string) => {
        console.log(`Generating Calendar Link: Title - ${title}, Start Time - ${startTime}`);
    
        const startDate = new Date(startTime.trim());
    
        if (isNaN(startDate.getTime())) {
            console.error(`Invalid startTime for ${title}: "${startTime.trim()}", using current time.`);
            startDate.setTime(Date.now());  // Fallback to current date if invalid
        }
    
        const start = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    
        const endDate = new Date(startDate);
        endDate.setHours(endDate.getHours() + 2.0);
        const end = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}`;
    };
    

    return (
        <div>
        <Layout>
        <div className = "ml-20 mt-20 animate-fadeIn">
            <h1 className = "text-5xl font-bold text-[#FFBF00] mb-4">Calendar</h1>
            {calendarList.length > 0? (
            <ul>

                {calendarList.map((item, index) => {
                    const { course, title, examTime } = parseCalendarLink(item);
                    console.log("This is the exam time:", examTime);
                    const calendarLink = generateGoogleCalendarLink(title, examTime);

                    return (
                        <li key={index}>
                            <div className = "text-white">
                            <strong>{index + 1}. </strong>
                            <strong>{course}</strong> - {title} <br />
                            <em>Exam Time:</em> {examTime} <br />
                            </div>
                            <Button
                                        variant="bordered"
                                        className="w-[200px] h-[40px] font-semibold border-[#FFBF00] border-2 text-[#FFBF00] transition-all duration-300 hover:bg-[#FFBF00] hover:text-white hover:shadow-xl hover:scale-105 mt-4 mb-4"
                                    >
                                        <a
                                            href={calendarLink || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => console.log(`Opening link: ${calendarLink}`)}
                                        >
                                            Export
                                        </a>
                                    </Button>
                            <Button 
                                variant="bordered"
                                className="w-[100px] h-[40px] bg-red-500 font-semibold text-white transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-xl hover:scale-105 mt-4 mb-4 ml-2"
                            
                                onPress={() => handleRemoveCalendar(index)}>Remove</Button>
                        </li>

                    );
                })}
            </ul>
            ):(<p className = "text-white">No exams in your schedule.</p>)}
        </div>
        </Layout>
        </div>
    );
}
