
import './App.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Main from './leyout/Main';
import Home from './component/home/Home';
import Satistics from './component/satistics/Satistics';
import Blog from './component/blog/Blog';


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