import React , { useContext } from 'react'
import { Link } from 'react-router-dom'
import {All} from "../../context/Context"

export default function () {
  let {dataInput} = useContext(All)
  let {getDataInput} = useContext(All)

  return (  
    <>
    <nav className="navbar navbar-expand-lg bg-black ">
  <div className="container ">
    <Link className="navbar-brand text-white" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="movie">Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="tv">Tv</Link>
        </li>
      </ul>
        <input className="form-control me-2 w-25" value={dataInput} onChange={getDataInput} type="search" placeholder="Search" aria-label="Search"/>
    </div>
  </div>
</nav>
    </>
  )
}
