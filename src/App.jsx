import { useState } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import UserContextProvider from './contextApi/Provider';


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
    <UserContextProvider>
      
       <RouterProvider router = {router} />
       
    </UserContextProvider>
  )
}

export default App
