import { useState } from 'react';
import './App.css'
import Home from './component/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';


 const router = createBrowserRouter([
  {
   path: "/",
   element: <div>
     <Layout />
   </div> ,   
  },
  {
   path: "/about",
   element: <div>
     <Layout />
     
   </div>   
  }
])


function App() {
  
  const [count, setCount] = useState(0)


  return (
    <>
      
       <RouterProvider router = {router} />
       
    </>
  )
}

export default App
