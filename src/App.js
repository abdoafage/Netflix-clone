import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import requests from "./request";
import Banner from './Banner';
import Navbar from './Navbar';

const App = () => {
  
  
  
  return (
    <div className='app'>
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginal} isLarge={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingAllWeek}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Animation" fetchUrl={requests.fetchAnimation}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedy}/>
      <Row title="Crime" fetchUrl={requests.fetchCrime}/>
      <Row title="Documentary" fetchUrl={requests.fetchDocumentary}/>
      <Row title="Drama" fetchUrl={requests.fetchDrama}/>
      <Row title="Family" fetchUrl={requests.fetchFamily}/>
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy}/>
      <Row title="History" fetchUrl={requests.fetchHistory}/>
      <Row title="Horror" fetchUrl={requests.fetchHorror}/>
      <Row title="Romance" fetchUrl={requests.fetchRomance}/>
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction}/>
      <Row title="Music" fetchUrl={requests.fetchMusic}/>
    </div>
  );
};

export default App;
