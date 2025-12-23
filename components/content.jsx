import { Link, useParams } from "react-router-dom"
import { useState,useEffect } from "react";
export function Content(){
    const [info,setInfo]=useState([]);
    const [loading,setLoading]=useState(true);
    let server=import.meta.env.VITE_SERVER_URL;
    

    const{id}=useParams();
    useEffect(()=>{
        async function information(){
            try{
                let res=await fetch(`${server}/info/${id}`);
                let data=await res.json();
                setInfo(data);
                setLoading(false);
            }
            catch(error){
                console.log("Error while fetching :",error);
            }
        }
        information();
    },[])
     
    
    return (loading ? (<div>Loading...</div>):(<div className={`h-full bg-${info[0].color}`}> 
            <div className="h-20 bg-red-100 flex justify-center items-center font-bold text-xl uppercase rounded-xl">{info[0].movie}
                <div className='bg-yellow-200 hover:bg-yellow-300  w-30 h-7 rounded-full  pl-5 absolute left-0 ' >
                    <Link to="/">HOME</Link>
                </div>
            </div>
            <div className="h-100  w-180 ml-70 rounded-4xl  ">
                <img className="object-cover  h-full  w-full bg-slate-400 rounded-4xl" src={`${server}/photo/${id}`} alt="vite photo" />
            </div>
            <div className=" h-full pt-4 text-xl font-medium leading-8">{info[0].description}</div>
        </div>
    ))
}