import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import './images.css';

export default function Images() {
  return (
    <>
      <div className="img-container">
        <h1>Muscle Building Excercise</h1>
        <div className="excercise-img">
          
          <div className="content">
            <div className="title icons">
              <h4 className="text">Strength</h4>
              <IoIosArrowDropright />
            </div>
            <img className='pic' 
              src="https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <div className="title icons">
              <h4 className="text">Strength</h4>
              <IoIosArrowDropright />
            </div>
            <img className='pic'
              src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <div className="title icons">
              <h4 className="text">Strength</h4>
              <IoIosArrowDropright />
            </div>
            <img className='pic'
              src="https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
