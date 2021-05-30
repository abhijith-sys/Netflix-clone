import React, {useEffect, useState} from 'react';
import './test.css'
import axios from '../../axios';
import {imgurl, APIKEY} from '../../constants/constant'
import YouTube from 'react-youtube';

function Test(props) {
  const [Movies,
    setMovies] = useState([])
  //urlid of various category

  useEffect(() => {
    axios
    //props.url gets the url of the category
      .get(props.url)
      .then(response => {
        console.log(response.data)
        setMovies(response.data.results)
      })

  });

  return (
    <div className='mrow'>
       {Movies.map((obj) =>
      <div
        className='rows'
        style={{
        backgroundImage: `url(${Movies
          ? imgurl + obj.backdrop_path
          : ""})`
      }}> 
        </div>)}
      
      
    </div>
  )
}
export default Test
