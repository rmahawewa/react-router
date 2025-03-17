import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'

const App = () => {

  const navigate = useNavigate();

  function navigateToProfile(e){
    console.log("test");
    navigate('/profile', { replace: true })
  }

  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>      
      <button onClick={navigateToProfile}>profile</button> {/* navigate to the profile page using 'useNavigate' hook */}   
      <nav>
        <ul>
          <li>
            {/* <a href="profile">Profile page</a> */}
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App
