import React from 'react'
import './App.css';
const Userlist = ({users}) => {
  return (
    <div className='listuse'>
        
      <p> <h4>Name:</h4> {users.name} </p>
      <p> <h4>Username:</h4> {users.username} </p>
      <p> <h4>Phone:</h4> {users.phone} </p>
      <p> <h4>e-mail:</h4> {users.email} </p>

    </div>
  )
}

export default Userlist