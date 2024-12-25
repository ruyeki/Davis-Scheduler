import prismaCourses from "../../../prismaCoursesClient";

export default async function handler(req:any, res:any){
    if(req.method === 'GET'){
        try{
            const courses = await prismaCourses.courses.findMany();
            res.status(200).json(courses);
        }catch(error){
        console.error("Request error", error);
        }
    }
}