import { Helmet } from 'react-helmet';
import {PulseLoader} from "react-spinners";
import {All} from "../../context/Context"
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Movie() {
  let {dataMovie} = useContext(All)
  return (
    <>
    <Helmet>
      <title>Movie</title>
    </Helmet>
    {dataMovie? <div className="container-fluid bg-black text-white">
    <div className="row gy-4 justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className='bg-secondary rounded-3 vh-100 text-center pt-5'>
            <h3>Triending</h3>
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
        </div>
        </div>
            : <div className='d-flex justify-content-center align-items-center vh-100'>
              <PulseLoader color="#36d7b7" />
    </div>}
    </>
  )
}
