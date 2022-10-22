import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({quiz}) => {
    const {id, name ,logo}=quiz;
   
    return (
        <div className='border-solid border-2 border-grey-500 m-2 justify-center '>
           <img src={logo} alt="" />
          <div className='flex mt-2'>
          <h1 className='text-2xl ml-4'>{name}</h1>
          <Link to={`/quiz/${id}`} className='bg-purple-600 m-auto rounded  text-white  border-green-200 px-2 text-2xl mb-3 m'>
           <button>satistics</button>
          </Link>
          </div>
        </div>
    );
};

export default Cart;