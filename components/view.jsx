import { Link } from "react-router-dom";
export function ViewDiv({className="",id}){
    let server=import.meta.env.VITE_SERVER_URL;
    return <div className={`${className}`}>
        <div className={`w-full h-full  bg-blue-300 rounded pt-3 pl-2 hover:bg-blue-400 `}>
            <div className="flex justify-between pr-2">
                <h3 className='text-3xl font-medium font-serif '>Movie:</h3>
                <div className='bg-yellow-200 hover:bg-yellow-300  w-20 h-7 rounded-full mt-2 ml-2 pl-5 ' >
                    <Link to={`/display/${id}`}>View</Link>
                </div>
            </div>
            <div className='bg-pink-200 h-7/10 w-11/12 rounded-2xl ml-2 mt-4'><img className="object-cover h-full w-full rounded-2xl"src={`${server}/photo/${id}`} alt="photo" /></div>
        </div>
    </div>
          
}