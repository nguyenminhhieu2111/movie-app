import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../Config';
import Button from '../button/Button';

const Nav_right = () => {
    
 const PopularMovie=({type="now_playing"})=>{
    const {data}=useSWR(
       `https://api.themoviedb.org/3/movie/${type}?api_key=23879be03691509dfc61e31842e87a81`, fetcher
    )
    const movies=data?.results || [];
 
   
    return(
        <>
            {movies.slice(0,2).map(item =>(
              <div className="moviePeople h-full p-2 flex text-white rounded-lg select-none bg-[#646464] mt-4">
               <img key={item.id} className='object-cover w-[70px]  h-[80px] rounded-lg'
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}></img>

             <div className="">
              <h3 className="mb-2 ml-1 text-sm font-medium text-center text-white">{item.title}</h3>
              <div className="flex items-center gap-20 mt-5 ml-2 text-sm">
       <span className='opacity-50 '>{new Date(item.release_date).getFullYear()}</span>
       <div className="flex vote"> 
       <span className='opacity-50'>{item.vote_average}</span>
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="yellow">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
       </div>
     </div>
              </div>
              </div>
            ))}
            <Button className="w-full mt-5 ">See More</Button>
        </>
    )
}
    return (
        <>           
        <div className='text-white bg-[#18181a] w-[300px] h-[100vh] fixed top-0 right-0'>
            <div className="relative p-7">
                <input type="text"
                placeholder='Search Movie...'
                className="w-full p-2 text-sm bg-transparent border border-gray-700 rounded-md outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-5 h-5 cursor-pointer right-9 top-9" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
</svg>
            </div>
            <div className="popular_movie ml-7 mr-7">
                <p>Popular Movies</p>
                <PopularMovie type="popular"></PopularMovie>
            </div>

            <div className="popular_movie ml-7 mr-7">
                <p className='mt-8 '>Watchlists</p>
                <PopularMovie type="top_rated"></PopularMovie>
            </div>
        </div>

        
        </>
    );
};
export default Nav_right;