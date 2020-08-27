import React from 'react';
import './Name.css';

const Name = (props) => {
    const { img, name, intro, created, price1, price } = props.courses;
    return (
        <div className="name">
            <div className="photo-edit">
                <img src={img} alt="" />
            </div>
            <div className='edit-style'>
                <h4>{name}</h4>
                <p><small>{intro}</small></p>
                <p>{created}</p>
                <p className='fontwight'>£{price1}</p>
                <p className='discount'><small>{price}</small></p>
                <button 
                    className="main-button"
                    onClick={() => props.handelAddCourse(props.courses)}
                    >Enroll Now</button>
            </div>
        </div>
    );
};

export default Name;