// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Course_card from '../Course_card/Course_card';

const Courses_sec = () => {
    //useState
    const [courses, setCourses] = useState([]);
    //
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setCourses(data))

    },[])
    //console.log(courses)

    return (
        <div className='md:w-2/3'>
            <h3 className='text-2xl font-bold'>
                Total Courses : {courses.length}
            </h3>
            <div className='flex flex-wrap gap-6 pt-3'>
                {
                    courses.map((course, idx)=> <Course_card
                     key={idx}
                      course={course}
                    ></Course_card>)
                }
            </div>
        </div>
    );
};

export default Courses_sec;