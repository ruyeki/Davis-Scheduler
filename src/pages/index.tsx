import { Button, Input } from "@nextui-org/react";
import React, { useContext, useState, useEffect } from 'react';

export default function Home() {

    return(
        <div>
            <h1>Davis Exam Scheduler</h1>

            <Button
                variant="bordered"
                onPress={() => window.location.href = '/search'}
                className="w-[250px] h-[40px] font-semibold border-[#06B7DB] border-2 text-[#06B7DB] transition-all duration-300 hover:bg-[#06B7DB] hover:text-white hover:shadow-xl hover:scale-105"
            >Search Exams</Button>
        </div>
    )


}