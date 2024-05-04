import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
const inputref = useRef();
// console.log(inputref)

    useEffect(() => {
        inputref.current.focus()
    }, [inputref]);

    const handleButtonClick = () => {
        // console.log(inputref)
        inputref.current.focus()
    };

    return (
        <div>
            <input ref={inputref} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
