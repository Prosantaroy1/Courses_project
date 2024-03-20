// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Course_card = ({course}) => {
    //console.log(course);
     const {price_number, credit_time, title, description,cover_img}= course;
    return (
        <div className='border rounded-xl  w-96 h-fit p-3 bg-zinc-600 text-white'>
             <img className='w-full' src={cover_img} alt="" />
             {/*title or description */}
             <h3 className='font-bold text-xl text-orange-400 py-2'>{title}</h3>
             <p className='font-semibold text-sl'>{description}</p>
            <div className='flex py-3 justify-between'>
                <p className='font-bold text-yellow-400 text-xl'>$ Price : {price_number}</p>
                <p className='font-bold text-sky-500 text-xl'>Credit_Time :  {credit_time} hr</p>
            </div>
            <button className='w-full p-3 rounded mb-0 bg-green-500 text-white font-bold' type="button">Select</button>
        </div>
    );
};

Course_card.propTypes= {
    course : PropTypes.object.isRequired,
}

export default Course_card;