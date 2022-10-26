import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';

 const Quiz = ()  => {
    const quizData=useLoaderData()
    console.log(quizData);
    const {logo,name,questions}=quizData.data;
 
   return (
        <div>
          <h1 className='text-5xl font-bold mt-3'>{name}</h1>
          <img className='logo' src={logo} alt="" />
         <div className='react m-5'>
          <div className='mb-3 flex'>
           <div>

          <p>{questions.id}</p>
          <h1>1. Questions:  {questions[0].question}</h1>
         
           </div>
           <div className='ml-5'>
          <FontAwesomeIcon icon={faEye}>
          </FontAwesomeIcon>
           </div>
          </div>
         <form>
         <div className='quizBox'>
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[0]} />
              <div>{questions[0].options[0]}</div>
            </label>
         
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[1]}  />
              <div>{questions[0].options[1]}</div>
            </label>
            
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[2]} />
              <div>{questions[0].options[2]}</div>
            </label>
            

            
                <label className="form-check flex">
                <input type="radio" name='form' value={questions[0].options[3]} />
                <div>{questions[0].options[3]}</div>
              </label>
            

             

         </div>
         </form>
         
        </div>
         <div className='react m-5'>
          <div className='mb-3 flex'>
           <div>

          <p>{questions.id}</p>
          <h1>2. Questions:  {questions[1].question}</h1>
         
           </div>
           <div className='ml-5'>
          <FontAwesomeIcon icon={faEye}>
          </FontAwesomeIcon>
           </div>
          </div>
         <form>
         <div className='quizBox'>
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[0]} />
              <div>{questions[1].options[0]}</div>
            </label>
         
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[1]}  />
              <div>{questions[1].options[1]}</div>
            </label>
            
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[2]} />
              <div>{questions[1].options[2]}</div>
            </label>
            

            
                <label className="form-check flex">
                <input type="radio" name='form' value={questions[0].options[3]} />
                <div>{questions[1].options[3]}</div>
              </label>
            

             

         </div>
         </form>
         
        </div>
         <div className='react m-5'>
          <div className='mb-3 flex'>
           <div>

          <p>{questions.id}</p>
          <h1>3. Questions:  {questions[2].question}</h1>
         
           </div>
           <div className='ml-5'>
          <FontAwesomeIcon icon={faEye}>
          </FontAwesomeIcon>
           </div>
          </div>
         <form>
         <div className='quizBox'>
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[0]} />
              <div>{questions[2].options[0]}</div>
            </label>
         
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[1]}  />
              <div>{questions[2].options[1]}</div>
            </label>
            
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[2]} />
              <div>{questions[2].options[2]}</div>
            </label>
            

            
                <label className="form-check flex">
                <input type="radio" name='form' value={questions[0].options[3]} />
                <div>{questions[2].options[3]}</div>
              </label>
            

             

         </div>
         </form>
         
        </div>
         <div className='react m-5'>
          <div className='mb-3 flex'>
           <div>

          <p>{questions.id}</p>
          <h1>4. Questions:  {questions[3].question}</h1>
         
           </div>
           <div className='ml-5'>
          <FontAwesomeIcon icon={faEye}>
          </FontAwesomeIcon>
           </div>
          </div>
         <form>
         <div className='quizBox'>
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[0]} />
              <div>{questions[3].options[0]}</div>
            </label>
         
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[1]}  />
              <div>{questions[3].options[1]}</div>
            </label>
            
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[2]} />
              <div>{questions[3].options[2]}</div>
            </label>
            

            
                <label className="form-check flex">
                <input type="radio" name='form' value={questions[0].options[3]} />
                <div>{questions[3].options[3]}</div>
              </label>
            

             

         </div>
         </form>
         
        </div>
         <div className='react m-5'>
          <div className='mb-3 flex'>
           <div>

          <p>{questions.id}</p>
          <h1>5. Questions:  {questions[4].question}</h1>
         
           </div>
           <div className='ml-5'>
          <FontAwesomeIcon icon={faEye}>
          </FontAwesomeIcon>
           </div>
          </div>
         <form>
         <div className='quizBox'>
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[0]} />
              <div>{questions[4].options[0]}</div>
            </label>
         
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[1]}  />
              <div>{questions[4].options[1]}</div>
            </label>
            
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[2]} />
              <div>{questions[4].options[2]}</div>
            </label>
            

            
                <label className="form-check flex">
                <input type="radio" name='form' value={questions[0].options[3]} />
                <div>{questions[4].options[3]}</div>
              </label>
            

             

         </div>
         </form>
         
        </div>
         <div className='react m-5'>
          <div className='mb-3 flex'>
           <div>

          <p>{questions.id}</p>
          <h1>6. Questions:  {questions[5].question}</h1>
         
           </div>
           <div className='ml-5'>
          <FontAwesomeIcon icon={faEye}>
          </FontAwesomeIcon>
           </div>
          </div>
         <form>
         <div className='quizBox'>
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[0]} />
              <div>{questions[5].options[0]}</div>
            </label>
         
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[1]}  />
              <div>{questions[5].options[1]}</div>
            </label>
            
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[2]} />
              <div>{questions[5].options[2]}</div>
            </label>
            

            
                <label className="form-check flex">
                <input type="radio" name='form' value={questions[0].options[3]} />
                <div>{questions[5].options[3]}</div>
              </label>
            

             

         </div>
         </form>
         
        </div>
         <div className='react m-5'>
          <div className='mb-3 flex'>
           <div>

          <p>{questions.id}</p>
          <h1>7. Questions:  {questions[6].question}</h1>
         
           </div>
           <div className='ml-5'>
          <FontAwesomeIcon icon={faEye}>
          </FontAwesomeIcon>
           </div>
          </div>
         <form>
         <div className='quizBox'>
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[0]} />
              <div>{questions[6].options[0]}</div>
            </label>
         
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[1]}  />
              <div>{questions[6].options[1]}</div>
            </label>
            
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[2]} />
              <div>{questions[6].options[2]}</div>
            </label>
            

            
                <label className="form-check flex">
                <input type="radio" name='form' value={questions[0].options[3]} />
                <div>{questions[6].options[3]}</div>
              </label>
            

             

         </div>
         </form>
         
        </div>
         <div className='react m-5'>
          <div className='mb-3 flex'>
           <div>

          <p>{questions.id}</p>
          <h1>8. Questions:  {questions[7].question}</h1>
         
           </div>
           <div className='ml-5'>
          <FontAwesomeIcon icon={faEye}>
          </FontAwesomeIcon>
           </div>
          </div>
         <form>
         <div className='quizBox'>
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[0]} />
              <div>{questions[7].options[0]}</div>
            </label>
         
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[1]}  />
              <div>{questions[7].options[1]}</div>
            </label>
            
         
            <label className="form-check flex">
              <input type="radio" name='form' value={questions[0].options[2]} />
              <div>{questions[7].options[2]}</div>
            </label>
            

            
                <label className="form-check flex">
                <input type="radio" name='form' value={questions[0].options[3]} />
                <div>{questions[7].options[3]}</div>
              </label>
            

             

         </div>
         </form>
         
        </div>
        </div>
        
    );
};

export default Quiz;