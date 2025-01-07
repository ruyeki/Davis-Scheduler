import { Button } from "@nextui-org/react";
import React from 'react';
import NavBar from "@/components/NavBar";
import Layout from "@/app/layout";

export default function Home() {

    return (
        <div>
        <Layout>
            
        <div className="min-h-screen flex flex-col items-center justify-center animate-fadeIn">
            <div className="text-center -mt-20">
                <h1 className="text-4xl font-extrabold text-[#FFBF00] mb-4 -mt-40" >
                    Welcome To Davis Scheduler!
                </h1>
                <p className="text-lg text-white mb-2">
                    Add your final exams to your calendar with ease!
                </p>
                <p className="text-md text-gray mb-8 text-white">
                    Just search, click add, and export...
                </p>

                <Button
                    variant="bordered"
                    onPress={() => window.location.href = '/search'}
                    className="text-white w-[250px] h-[50px] text-lg font-semibold border-[#FFBF00] border-2  
                    transition-all duration-300 hover:bg-[#FFBF00] hover:text-white hover:shadow-xl hover:scale-105"
                >
                    Get Started
                </Button>
            </div>
        </div>
        </Layout>
        </div>
    )
}
