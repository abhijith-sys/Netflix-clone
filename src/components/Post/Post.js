import React, {useEffect, useState} from 'react';
import './Post.css';
import axios from '../../axios';
import {imgurl, APIKEY} from '../../constants/constant'
import YouTube from 'react-youtube';

function Post(props) {
  const [Movies,
    setMovies] = useState([])
  //urlid of various category
  const [Urlid,
    setUrlid] = useState('')
  useEffect(() => {
    axios
    //props.url gets the url of the category
      .get(props.url)
      .then(response => {
        console.log(response.data)
        setMovies(response.data.results)
      })

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  const handleMovie = (id) => {
    console.log(id)
    axios
    //gets the youtube video
      .get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
      .then(response => {
        console.log(response.data)
        if (response.data.results.length !== 0) {
          setUrlid(response.data.results[0])
        }
      })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">

        {Movies.map((obj) => <img
          onClick={() => handleMovie(obj.id)}
          className={props.isSmall
          ? 'smallposter'
          : 'poster'}
          src={`${imgurl + obj.backdrop_path}`}
          alt="poster"/>)}

      </div>
      {Urlid && <YouTube videoId={Urlid.key} opts={opts}/>}
    </div>
  )
}

export default Post
