import React from 'react';
import Header from './components/header/Header';
import './App.css';
import TinderCards from './components/tindercard/TinderCards';

function App() {
  return (
    <div className="app">
       <Header/>
       <TinderCards/>
    </div>
  );
}

export default App;
