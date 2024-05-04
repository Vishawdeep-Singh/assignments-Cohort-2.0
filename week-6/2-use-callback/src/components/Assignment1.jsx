import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);
    // let counti =0;

    // Your code starts here
   const handleIncrement=useCallback(()=>{
setCount(Currentcount =>{ // we did this because we dont want to depend upon count state variable because if we depend upon the state variable we have to pass the variable in dependancy array and then the function re renders also the component re renders so thats why we are using Setcount directly
   return Currentcount+1;
});
// counti++;
// console.log(counti)
// setCount(count+1);
// console.log("hi")
    },[])

    const handleDecrement=useCallback(() =>{
        setCount(Currentcount =>{
            return Currentcount-1;
        });
    //   console.log("hi")
    },[])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
