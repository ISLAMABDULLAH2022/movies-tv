import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {All} from "../../context/Context"
import { Link } from 'react-router-dom'


      
export default function Home() {
  let {dataMovie} = useContext(All)
  let {dataTv} = useContext(All)
  let {dataPerson} = useContext(All)

  



  const settings = {   
    // dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className="container bg-danger mb-5">
    <Slider {...settings}>
       {(dataMovie,dataTv).map(e=> <div className='overflow-hidden'> <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} className='w-75 m-2 rounded-3' alt={e.title}/></div> )} 
      </Slider>
    </div>
    <div className="container-fluid bg-black text-white">
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className='bg-secondary rounded-3 vh-100 text-center pt-5'>
            <h1>Triending</h1>
            <h3 className="m-3">Movies</h3>
            <h3>To Watch Now</h3>
          </div>
        </div>
          {dataMovie.filter(e=> e.poster_path !== null).map(e=>
            <div className="col-lg-3 col-md-4 col-sm-6" key={e.id}>
            <div className='bg-secondary rounded-3 vh-100'>
              <Link to={`/movie.tv/movie/${e.id}`}>
              <div className='overflow-hidden'><img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} className='w-100 rounded-3' alt={e.title}/></div>
              </Link>
              <h3 className='text-center m-2'>{e.title}</h3>
              <h3 className='text-center m-2 fs-6'>{e.release_date}</h3>
             </div>
            </div>
            )}
      
          {dataTv.filter(e=> e.poster_path !== null).map(e=>
            <div className="col-lg-3 col-md-4 col-sm-6" key={e.id}>
            <div className='bg-secondary rounded-3 vh-100'>
            <Link to={`/movie.tv/tv/${e.id}`}>
              <div className='overflow-hidden'><img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} className='w-100 rounded-3' alt={e.name}/></div>
            </Link>
              <h3 className='text-center m-2'>{e.name}</h3>
              <h3 className='text-center m-2 fs-6'>{e.first_air_date}</h3>
             </div>
            </div>
            )}
            <h1>person</h1>
            { dataPerson.filter(e=> e.profile_path !== null).map(e=>
            <div className="col-lg-3 col-md-4 col-sm-6" key={e.id}>
            <div className='bg-secondary rounded-3 vh-100'>
              <div className='overflow-hidden'><img src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`} className='w-100 rounded' alt={e.name}/></div>
              <h3 className='text-center m-2'>{e.name}</h3>
             </div>
            </div>
            )}    
      </div>
    </div>
    </>
  )
}
