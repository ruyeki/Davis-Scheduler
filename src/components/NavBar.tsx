import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar(){
    return(
        <div className=''>
            <Link href = '/' className = " ">Home</Link>
            <Link href = '/search'>Search</Link>
            <Link href = '/calendar'>Calendar</Link>
            <Link href = '/contact'>Contact Me</Link>
            <Link href = 'https://registrar-apps.ucdavis.edu/courses/search/index.cfm'>View Courses</Link>        
        </div>
    );
}