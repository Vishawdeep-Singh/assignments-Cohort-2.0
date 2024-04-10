import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateCard } from './components/cards'
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([])
  //  const [name,setName]=useState("Vishawdeep Singh");
  //  const [desc,setDesc]=useState("Student of university");
  //  const [interests,setInterests]=useState(["Open source"," Reading books" , "Gym"]);
  // //  const [social,setSocial]=useState(["https://www.linkedin.com/in/vishawdeepsingh/","https://twitter.com/Vishawdeep29"]);
  //  const [social,setSocial]=useState(new Map(
  //   [
  //     ["https://www.linkedin.com/in/vishawdeepsingh/","LinkedIn"],
  //     ["https://twitter.com/Vishawdeep29","X"]
  //   ]
  //  ));
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cards');
        console.log(response.data);
        setCards(response.data.cards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, []);
  const handleAddcard = (newcard) => {
    setCards([...cards, newcard]);
  }
  const handleDeletecard = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cards/${id}`);
      setCards(cards.filter((card) => card._id !== id));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  }

  return (

    <>
    <div>
      <h1>Add a new card:</h1>
     <div><InputCard onAddcard={handleAddcard}></InputCard></div> 
      <div><CreateCard cards={cards} onDelete={handleDeletecard} ></CreateCard></div>
    </div>
      
    </>
  )
}
function InputCard({ onAddcard }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [interests, setInterests] = useState([]);
  const [social, setSocial] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/card', {
        "name" : name,
        "description" : description,
        "interests" : interests,
        "social" : social
      });


      onAddcard(response.data)
      setName('');
      setDescription('');
      setInterests([]);
      setSocial({});
    }
    catch (err) {
      console.log("error adding card");
    }

  }



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Interests:
        <input type="text" value={interests} onChange={(e) => setInterests(e.target.value.split(','))} />
      </label>
      <br />
      <label>
        Social Links:
         <input type="text" placeholder="LinkedIn URL" value={social['LinkedIn']} onChange={(e) => setSocial({ ...social,LinkedIn: e.target.value })} /> {/*ow, let's say you want to update the linkedin URL. You cannot directly modify the social object because in React, state should be immutable. Instead, you create a new object with the updated value and pass it to setSocial. In this case ...social wil be empty*/}
        <input type="text" placeholder="Twitter URL" value={social['X']} onChange={(e) => setSocial({ ...social,X: e.target.value })} />
      </label>
      <br />
      <button type="submit">Add Card</button>
    </form>
  );
}

export default App
