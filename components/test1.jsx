import { ViewDiv } from "./view";
import { Small } from "./smallView";
import { useState,useEffect } from "react";
export function Test(){
    const [moviesInfo,setMoviesInfo]=useState([]);
    const[loading,setLoading]=useState(true);
    let server=import.meta.env.VITE_SERVER_URL;
    useEffect(()=>{

        async function fetchMovies(){
            let res= await fetch(`${server}/data/weekly-top`);
            let data=await res.json();
            
            
            setMoviesInfo(data);
            setLoading(false);
        }
        fetchMovies();
    },[]); 
    return (loading ? ( <div> Loading...</div> )
        :( <div className="h-full bg-red-100">
        <div className="h-25 bg-red-100 flex  justify-center items-center text-3xl font-extrabold font-serif underline">MOVIES REVIEWS</div>
        <div className="h-140 w-full bg-pink-100 rounded flex  mb-2 flex ">
            <div className=" h-full basis-4/6 font-bold text-2xl   "><u>TOP MOVIES FOR THE WEEK:</u>
                    <div className="h-9/10 w-full grid grid-cols-3 grid-rows-3 mt-5 text-lg gap-2  ">
                           <Small className="col-span-1 row-span-1 col-start-1"id={1}></Small>
                           <div className="bg-pink-300 col-span-2 hover:bg-pink-400 rounded-3xl">
                                <div className="p-2">{moviesInfo[0]?.movie}:</div>
                                <div className="font-semibold pl-1">{moviesInfo[0]?.brief}</div>
                           </div>
                            <Small className="col-span-1 row-span-1 col-start-1"id={2}></Small>
                            <div className="bg-pink-300 col-span-2 hover:bg-pink-400 rounded-3xl">
                                <div className="p-2">{moviesInfo[1]?.movie}:</div>
                                <div className="font-semibold pl-1">{moviesInfo[1]?.brief}</div>
                            </div>
                             <Small className="col-span-1 row-span-1 col-start-1"id={3}></Small>
                            <div className="bg-pink-300 col-span-2 hover:bg-pink-400 rounded-3xl">
                                <div className="p-2">{moviesInfo[2]?.movie}:</div>
                                <div className="font-semibold pl-1">{moviesInfo[2]?.brief}</div>
                            </div>
                    </div>
            </div>


            <div className="bg-red-300 h-full basis-2/6 rounded-3xl p-4 text-3xl font-bold ml-5 ">LATEST NEWS:
            <div className="text-lg font-semibold "> A picture along with its descripiton</div>
            </div>
        </div>
        <div className="h-25 w-full text-4xl font-extrabold font-serif pt-8 pl-5">EXPLORE SECTION:</div>
        <div className=" h-screen grid grid-cols-5 grid-rows-5 grid-flow-col bg-blue-100 gap-2 mt-4">
            <ViewDiv className="col-span-2 row-span-2" id={6}>vv</ViewDiv>
             <Small className="col-span-1 row-span-1 col-start-3"id={4}></Small>
            <Small className="col-span-1 row-span-1 col-start-4 "id={5}></Small>
            <Small className="col-span-1 row-span-1 col-start-5"id={7}></Small>
            <Small className="col-span-3 row-span-1  row-start-2 col-start-3"id={9}></Small>    
            <ViewDiv className="col-span-3 row-span-3 col-start-3"id={8}></ViewDiv>
            <Small className="col-span-1 row-span-1 row-start-3 col-start-1 "id={11}></Small>
            <Small className="col-span-1 row-span-1  row-start-3 col-start-2"id={12}></Small>
            <ViewDiv className="col-span-2 row-span-2 row-start-4 col-start"id={10}></ViewDiv>     
        </div>  
    </div>
    ))
}