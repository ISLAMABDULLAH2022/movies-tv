import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';




export default function MovieOrTvDetails() {
  let [dataDetails,setDataDetails] = useState([]) 
  let {movie,id} = useParams()
 
  async function getdataDetails(){
    let {data} = await axios.get(`https://api.themoviedb.org/3/${movie}/${id}?api_key=61d0781c9f08ecc479ddecb85efa0947`)
    setDataDetails(data)
  }
  useEffect(_=>{ 
    getdataDetails()
  },[])
  return (
    <> 
    <Helmet>
      <title>
       details
      </title>
    </Helmet>
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-4">
          <div>
            <div className='overflow-hidden'>
                <img src={`https://image.tmdb.org/t/p/w500/${dataDetails.poster_path}`} alt={dataDetails.title} className='w-100'/>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h1>{dataDetails.title}</h1>
        </div>
      </div>
    </div>
    </>
  )
}
