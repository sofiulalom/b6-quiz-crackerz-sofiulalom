import React from 'react';

const Blog = () => {
    return (
        <div className='bg-zinc-200 rounded w-full'>
           <div className='p-10 m-4'>
           <div className='border-solid border-2 border-green-500  m-9 text-justify p-10 bg-slate-700 text-white text-2xl'>
           <h1 className='bg-slate-100 text-red-600 p-2'>1. what is the purpose of react router?</h1>
            <p>1. answre the quaction:</p>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border-solid border-2 border-green-500  m-9 text-justify p-10 bg-slate-700 text-white text-2xl'>
           <h1 className='bg-slate-100 text-red-600 p-2'>2. how does context api work?</h1>
            <p>2. answre the quaction:</p>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border-solid border-2 border-green-500  m-9 text-justify p-10 bg-slate-700 text-white text-2xl'>
           <h1 className='bg-slate-100 text-red-600 p-2'>3.What is a useRef in React??</h1>
            <p>3. answre the quaction:</p>
            <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called .</p>
            </div>
           </div>
        </div>
    );
};

export default Blog;