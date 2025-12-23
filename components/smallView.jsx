import { Link } from "react-router-dom"
export function Small({className="",id}){
     let server=import.meta.env.VITE_SERVER_URL;
    return <div className={`${className} bg-blue-300 hover:bg-blue-400 rounded-3xl `}>
        <div className="w-full h-full flex justify-between ">
              <div className="w-11/12 h-4/5 bg-pink-200 ml-2 mt-2 rounded-2xl"><img className="object-cover w-full  h-full rounded-2xl"src={`${server}/photo/${id}`} alt="photo" /></div>
             <div className='bg-yellow-200 hover:bg-yellow-300  w-20 h-7 rounded-full mt-1 ml-2 pl-5  ' >
                    <Link to={`/display/${id}`}>View</Link>
             </div>
        </div>
       

    </div>
}