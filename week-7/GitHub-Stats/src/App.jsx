import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [username,setUsername]=useState("");
  const [data,setData]=useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick= async ()=>{
    setLoading(true);
    setError(null); // Clear any previous errors before making a new request
        
        try{
           const response = await axios.get(
          `https://api.github.com/users/${username.trim()}`,
        );
        setData(response.data);
        console.log(response.data)
       }
       catch(er){
        console.log(er)
       } finally{
        setTimeout(() => setLoading(false), 500);
       }
      
  }

 return <div>
  <div className="form">
    <input ref={inputRef} type="text" placeholder='Enter Github username' value={username} onChange={(e)=>{
      setUsername(e.target.value)
    }} />
    <button onClick={handleClick}>Generate</button>
  </div>
  {loading && <div className="loader"></div>}  {/* While loading is true, the loader (<div className="loader"></div>) is rendered.
   */}

   {!loading && data && (
    <div className='card'>
      <div className="back-style">
      
   
      </div>
      <div className="avatar">
        {data.avatar_url && (
          <img src={data.avatar_url} alt="Url of person" srcset="" className='avatar-ing'/>
        )}
      </div>
      
      <div className="name">
        {data.name && <p>{data.name}</p>}
        {data.login && <p>@{data.login}</p>}

      </div>
      <div className="bio">
        {data.bio && <p>{data.bio}</p>}
      </div>

      <div className="profile-info">
  {data.followers !== null && (
    <div className="followers">
      <p>{data.followers}</p>
      <p>Followers</p>
    </div>
  )}
  {data.following !== null && (
    <div className="following">
      <p>{data.following}</p>
      <p>Following</p>
    </div>
  )}
  {data.public_repos !== null && (
    <div className="Repos">
      <p>{data.public_repos}</p>
      <p>Repositories</p>
    </div>
  )}
</div>

    </div>
   )}

  
 </div>

 
}

export default App
