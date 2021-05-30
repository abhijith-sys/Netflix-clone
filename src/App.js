import './App.css';
import React from 'react'
import Navbar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Post from './components/Post/Post';
import {
  orginals,
  action,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries
} from './url'
import About from './components/about/About';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Post url={orginals} title='NETFLIX ORIGINALS'/>
      <Post url={action} title='Action' isSmall/>
      <Post url={ComedyMovies} title='Comedy ' isSmall/>
      <Post url={HorrorMovies} title=' Horror ' isSmall/>
      <Post url={RomanceMovies} title='Romance ' isSmall/>
      <Post url={Documentaries} title='Documentaries' isSmall/>
      <About/>
    </div>
  );
}

export default App;