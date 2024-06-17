import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const wordBank = [
  "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", 
  "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", 
  "incididunt", "ut", "labore", "et", "dolore", "magna", 
  "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", 
  "nostrud", "exercitation", "ullamco", "laboris", "nisi", 
  "ut", "aliquip", "ex", "ea", "commodo", "consequat", 
  "Duis", "aute", "irure", "dolor", "in", "reprehenderit", 
  "in", "voluptate", "velit", "esse", "cillum", "dolore", 
  "eu", "fugiat", "nulla", "pariatur", "Excepteur", "sint", 
  "occaecat", "cupidatat", "non", "proident", "sunt", "in", 
  "culpa", "qui", "officia", "deserunt", "mollit", "anim", 
  "id", "est", "laborum"
];
function App() {
  const [words,setWords]=useState("");
  const [para,SetPara]=useState("");
  const pararef=useRef();

function submitHandler(e){
  e.preventDefault(); // Prevents the form from submitting and causing a page refresh
  const numWords = parseInt(words); // Parse the input to an integer

  if (isNaN(numWords) || numWords <= 0) {
    alert("Please enter a valid number of words."); // Simple validation
    return;
  }

  const generatedParagraph = generateParagraph(numWords);
  setWords(""); // Clear the input field
  SetPara(generatedParagraph); // Update the paragraph state
  console.log(generatedParagraph)

}
function generateParagraph(numWords){
  const selectedWords=[];
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * wordBank.length); // Generate a random index within the length of wordBank
    selectedWords.push(wordBank[randomIndex]); // Add the word at the random index to the selected words array
  }
  const generatedParagraph = selectedWords.join(" ");
  return generatedParagraph;
}


  return <div className='container'>
    <h1>Para Generator</h1>
    <form onSubmit={submitHandler}>
      <input type="number"  placeholder='Enter number of words' value={words} onChange={(e)=>{
        setWords(e.target.value)
      }}/>
    <button type='submit'>Generate</button>
    </form>
      
      <div className='box'>{para}</div>
    
    
  </div>
}

export default App
