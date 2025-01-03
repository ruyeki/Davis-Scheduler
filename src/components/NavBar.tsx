import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';

export default function NavBar() {

    return (
            <nav className=" p-4 flex items-center justify-between">
                <div className="text-white text-xl font-bold">
                    <Link href="/">Davis Scheduler</Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/search" className="text-white">Search</Link>
                    <Link href="/calendar" className="text-white">Calendar</Link>
                    <Link href="/contact" className="text-white">Contact</Link>
                </div>

                <div>

                <Button 
                        variant="bordered"
                        className="text-white w-[150px] h-[40px] text-lg font-semibold border-[#FFBF00] border-2  
                                        transition-all duration-300 hover:bg-[#FFBF00] hover:text-white hover:shadow-xl hover:scale-105"
                        onPress={() => window.open('https://registrar-apps.ucdavis.edu/courses/search/index.cfm', '_blank')}
                    >
                        View Courses
                    </Button>

                </div>
            </nav>
    );
}
