import React from 'react'
import Userlist from "./Userlist";
import './App.css';
const User = ({users}) => 
{
  return (
    <div className='affich'>
{users.map((el)=><Userlist users={el}/>)}

    </div>
  )
}

export default User