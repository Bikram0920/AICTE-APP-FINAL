import React, { useEffect, useState } from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap";
import { NavLink } from 'react-router-dom';
import './AllCourses.css'
import DashBtn from './DashBtn';
export const AllCourses = () => {

  const [CourseArr,setCourseArr]=useState([]);

const getAllCourses=async ()=>
{
    const res=await fetch('/allcourses',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })

    const AllCourses=await res.json();
    // console.log(AllCourses);

    setCourseArr(AllCourses);

}

useEffect(()=>
{
    getAllCourses();
},[])



  return (
    <>
    
    <div className='container0'>
    {
       CourseArr.map((course,index)=>
       {
          return(
            <div className=' border border-dark  mt-3 p-4 rounded-3 w-50' key={index} >
              <h3>{course.subject}</h3>
              <h5>Department: {course.title}</h5>
              <h5>Credit: {course.credit}</h5>
              <NavLink to={course._id} >  <button className='btn bg-danger text-white' >View</button></NavLink>

            </div>
          )
       })
    } 
    </div>
    <DashBtn/>
    </>
    
  )
}
