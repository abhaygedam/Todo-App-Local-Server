import { useEffect, useState } from "react";

function Counter() {

    const [count, setCount] = useState(10);

    useEffect(() => {
       const id = setInterval(() => {
           setCount((prevVal) => {
               if (prevVal == 0) {
                   clearInterval(id);
               }
               return prevVal - 1;
           });
           console.log("set internal id ",id);
       }, 1000);
         return () => {
               console.log("intermidiate");
               clearInterval(id);
           }
       
    },[]);
   

    return (
        <div>
     Counter is : {count}
        </div>
    );

}

export default Counter;