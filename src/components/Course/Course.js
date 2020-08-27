import React from 'react';
import FakeData from '../../FakeData/FakeData';
import { useState } from 'react';
import './Course.css';
import Name from '../Name/Name';
import Cart from '../Cart/Cart';


const Course = () => {
    const [course, setCourse]= useState(FakeData);
    const[cart, setCart]= useState([]);
    const handelAddCourse = (courses) =>{
        const newCart = [...cart, courses];
        setCart(newCart);
    }
    return (
        <div className="course-container">
            <div className="right-container">
                
                {
                    course.map(co => <Name
                        key={co.id}
                        handelAddCourse ={handelAddCourse}
                         courses={co}
                         ></Name>)
                }
            
            </div>
            <div className="left-container">
            <h2> Total Card-items: {course.length}</h2>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;