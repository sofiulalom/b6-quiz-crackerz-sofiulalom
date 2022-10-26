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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, error culpa laudantium aperiam saepe sequi, repudiandae eius maxime ducimus natus fugit aut optio inventore voluptates. Amet maiores voluptates minima beatae!
            Quaerat unde eveniet assumenda, quo vitae nobis delectus nihil, rem numquam facilis fugiat ipsa commodi ipsam eligendi tenetur tempore voluptatum ab velit? Eum eaque perferendis reiciendis fugit ab excepturi ratione?
            Blanditiis temporibus maiores excepturi tenetur non deserunt, laborum, dolor consequatur magnam quam accusantium, quo aliquid. Eaque maxime  
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