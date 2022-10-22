
import './App.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Main from './leyout/Main';
import Home from './component/home/Home';
import Satistics from './component/satistics/Satistics';
import Blog from './component/blog/Blog';
import Quizs from './component/quizs/Quizs';
import Quiz from './component/quiz/Quiz';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,children:[
        {
          path:'/',
          loader: async  ({pramas})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
          element:<Home></Home>
         },
         {
           path:'/home',
           loader: async  ({pramas})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
           element:<Home></Home>,
     
         },
         {
          path:'/satistics',
          element: <Satistics></Satistics>
         },
         {
           path:'/quizs',
           loader:async () =>{
           return fetch(`https://openapi.programming-hero.com/api/quiz`)
            
           },
           element: <Quizs></Quizs>
         },
         {
         path:'/quiz/:quizId',
         loader:async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
         },
         element:<Quiz></Quiz>
         },
         {
          path:'/blog',
          element:<Blog></Blog>
         }

      ]
      
    },
   
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}
     
     
     
     ></RouterProvider>
    </div>
  );
}

export default App;