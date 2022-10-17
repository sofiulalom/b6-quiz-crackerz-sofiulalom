
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
          element:<Home></Home>
         },
         {
           path:'/home',
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