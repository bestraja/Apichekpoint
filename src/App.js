import axios from "axios";
import './App.css';
import User from "./User";
import { useEffect, useState} from "react";

 
function App() {
const [users,setusers]=useState([])

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then( (response)=> {
    setusers(response.data);})
    console.log(setusers);
  },[]);
  
 
 

  return (
    <div className="App">
      <header className="App-header">
      <h1> Our list of users</h1>
        <User users={users} />
        
      </header>
    </div>
  );
}

export default App;
