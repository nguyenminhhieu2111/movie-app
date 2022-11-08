import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const MovieCard = ({item}) => {
  const{
    title,
    vote_average,
    release_date,
    poster_path,
    id
    }=item
    const navigate = useNavigate()
    return (
        <div className="flex flex-col h-full p-2 text-white rounded-lg select-none movie-card bg-[#4b4a4a]">
        <img className="object-cover w-full h-[170px] mb-5 rounded-lg "
         src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
         <div className="flex flex-col flex-1 ">
     <h3 className="mb-2 text-base font-bold text-center text-white h-[48px]">{title}</h3>
     <div className="flex items-center justify-between text-sm">
       <span className='opacity-50'>{new Date(release_date).getFullYear()}</span>
       <div className="flex vote">
       <span className='opacity-50'>{vote_average}</span>
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="yellow">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
       </div>
     </div>
     <Button className="flex items-center justify-center mt-2"  onClick={()=> navigate(`/movie/${id}`)} >
       <p>Watch Now</p>
       <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
     </Button>
   {/*   <button onClick={()=> navigate(`/movie/${id}`)} className="w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary">Watch Now</button> */}
    </div>
     </div>
    );
};

export default MovieCard;