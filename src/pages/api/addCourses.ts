import prismaCourses from "../../../prismaCoursesClient";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: any, res:any){
    if(req.method === 'POST'){
        const {id,  course, section, title, instructor, crn, exam_start_time} = req.body;
        try{
            const createCourse = await prismaCourses.courses.create({
                data:
                    {id, course, section, title, instructor, crn,  exam_start_time}
                
            });
            

            res.status(201).json(createCourse);
        }catch(error){
            console.log("Error adding course, ", error);
            res.status(500).json({error: "Error creating course"}); //error 500 means error during database insertion
        }
    }else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
}