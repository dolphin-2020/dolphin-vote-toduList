import React ,{Fragment}from 'react';
import './App.css';
import Header from './header'
import Movie from './movie'

function App() {
  return (
    <Fragment>
      <Header/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
    </Fragment>
  );
}

export default App;
