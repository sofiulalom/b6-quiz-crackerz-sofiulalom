import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../quiz/Quiz';



const Quizs = () => {
    const quizData=useLoaderData();
    console.log(quizData);
    return (
        <div>
            <h1>quizs details lookit quiz </h1>
           {
            quizData.data.map(quiz =><Quiz 
                key={quiz.id} 
                quiz={quiz}
            ></Quiz>)
           }
            
        </div>
    );
};

export default Quizs;