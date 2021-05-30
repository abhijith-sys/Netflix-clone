import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios from '../../axios'
import {APIKEY,imgurl} from '../../constants/constant'
function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(() => {
        
        axios.get(`trending/all/week?api_key=${APIKEY}&language=en-US`).then((Response)=>{
            //console.log(Response.data)
            setMovie(Response.data.results[2])
        })
    }, [])
  return (
    <div style={{backgroundImage :`url(${Movie ? imgurl+Movie.backdrop_path : ""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{Movie ? Movie.title :'title'}</h1>
        
        <div className='bannerbutton'>
          <button className='button'>play</button>
          <button className='button'>my list</button>
        </div>
        <h1 className='discription'>{Movie ? Movie.overview : " discription"}</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
