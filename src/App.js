import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import requestPermission from './firebaseService.js';
function App() {

  useEffect(() => {
    requestPermission();
  }, [])
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
