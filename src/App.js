import React from 'react';
import Header from './components/header/Header';
import './App.css';
import TinderCards from './components/tindercard/TinderCards';
import SwipeButtons from './components/swipebutton/SwipeButtons';

function App() {
  return (
    <div className="app">
       <Header/>
       <TinderCards/>
       <SwipeButtons/>
    </div>
  );
}

export default App;
