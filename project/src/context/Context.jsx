import axios from 'axios'
import { createContext, useState, useEffect } from "react"
export let All = createContext(0)

export default function Context({children}){
    let [dataInput,setDataInput] = useState("")
    let [dataTv,setDataTv] = useState([]);
    let [dataMovie,SetDataMovie] = useState([])
    let [dataPerson,setDataPerson] = useState([])
    

    function getDataInput(e){
        setDataInput(e.target.value)
     }
  
    let show = dataInput? "search":"discover";

    async function getDataTv(){
       let {data} = await  axios.get(`https://api.themoviedb.org/3/${show}/tv?api_key=61d0781c9f08ecc479ddecb85efa0947`,{
        params:{
        query : dataInput
      }} )
       setDataTv(data.results)
     }
     async function getDataMovie(){
        let {data} = await  axios.get(`https://api.themoviedb.org/3/${show}/movie?api_key=61d0781c9f08ecc479ddecb85efa0947`,{
        params:{
          query : dataInput
        }})
         SetDataMovie(data.results)   
      }
      async function getDataPerson(){
         let {data} = await  axios.get("https://api.themoviedb.org/3/discover/person?api_key=61d0781c9f08ecc479ddecb85efa0947")
         setDataPerson(data.results)
           }

           

     useEffect(_=>{ 
       getDataTv()
       getDataMovie()
       getDataPerson()
     },[dataInput])


    return<>
    <All.Provider value={{dataInput,getDataInput,dataTv,dataMovie,dataPerson}}>
       {children}
    </All.Provider>
    </>
}
