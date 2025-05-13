import { useState , useEffect } from "react";

function Timmer()  {

    const [count , setCount] = useState(0);

   useEffect(() => {
    
    setTimeout(() => {
        setCount((count) => count + 1);
        
    }, 1000);

   });
   return ( <h2>i m counter {count}</h2>)
    


}


export default Timmer