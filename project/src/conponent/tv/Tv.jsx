import { useContext } from "react";
import {All} from "../../context/Context"
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

export default function Tv() {
  let {dataTv} = useContext(All)
  
  return (
    <>
    <Helmet>
      <title>Tv</title>
    </Helmet>
    <div className="container-fluid bg-black text-white">
    <div className="row gy-4 justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className='rounded-3 vh-100 text-center pt-5'>
            <h3>Triending</h3>
            <h3 className="m-3">Movies</h3>
            <h3>To Watch Now</h3>
            {/* <input className="form-control me-2" value={dataInput} onChange={getDataInput} type="search" placeholder="Search" aria-label="Search"/> */}
          </div>
        </div>
    {dataTv.map(e=>
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
        </div>
        </div>
    </>
  )
}
