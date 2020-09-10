import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <div className="title">
        <h1>Reminders:</h1>
      </div>
        <ul className="list">
            <textarea>Item One</textarea>
            <textarea>Item Two</textarea>
            <textarea>Item Three</textarea>
            <textarea>Item Four</textarea>
        </ul>
    </div>
  )
}

export default App;
