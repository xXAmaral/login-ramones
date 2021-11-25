import {Router} from './router'
import React, {useState} from 'react';
import Login from './pages/Login';

function App() {

  const [user, setUser] = useState(null);

  if(user === null){
    return(
      <Login />
    )
  }

  return(
    <Router></Router>
  )
}

export default App;