import React from 'react';
import sofiul from './sofiulalom.jpg'
import  './home.css';
import { useLoaderData} from 'react-router-dom';
import Cart from '../cart/Cart';


const Home = ({pramas}) => {
    const quizs=useLoaderData()
    
    return (
        <div>
         <div className='flex home1'>
         <div className='home'>
         <img src={sofiul} alt="" />

         <div className='home-info'>
         <p>I'm a web developer and I'm doing well. 
            Check out the new site pogrom quiz now
            I'm a web developer and I'm doing well. 
            Check out the new site pogrom quiz now</p>
         </div>
         
         </div>
         <div className='purple'>
            <h1 className='text-2xl font-bold'>welcome to my pograming quiz</h1>
            <p>
            Below, we have made an exciting Paragraph writing MCQs quiz for you. Ever wondered about the fact that how much do you know about the basics of paragraph writing? Do you know what the main components of a paragraph are? What are the different types of paragraphs? Check out our this Paragraph writing MCQs quiz and learn everything there is to know about paragraph writing. Do not forget to leave a comment. 
            </p>
         </div>
        
         </div>
          <div className='quiz'>
          {
            quizs.data.map(quiz => <Cart key={quiz.id} quiz={quiz}></Cart>)
           }

          </div>
           
        </div>
    );
};

export default Home;