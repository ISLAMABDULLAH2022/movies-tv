import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./conponent/layout/Layout";
import Home from "./conponent/home/Home";
import Movie from "./conponent/movie/Movie";
import Tv from "./conponent/tv/Tv";
import { Offline } from "react-detect-offline";
import MovieOrTvDetails from "./conponent/movie.tv/MovieOrTvDetails";
import Error from "./conponent/error/Error";






function App() {
let router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {index:true, element:<Home/>},
      {path:"movie", element:<Movie/>},
      {path:"tv", element:<Tv/>},
      {path:"movie.tv/:movie/:id", element:<MovieOrTvDetails/>},
      {path:"*", element:<Error/>}
    ]
  }
])
  return <>
   <RouterProvider router={router} />
   <div className="position-fixed bottom-0 start-0">
   <Offline className="h3">Only shown offline (surprise!)</Offline>
   </div>
 </>
}

export default App;

