import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../../Config';
import MovieCard from './MovieCard';
import {SwiperSlide,Swiper} from "swiper/react"
import "swiper/scss"
const MovieDetail = () => {
    const {movieId}=useParams()
    const {data,error}=useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=23879be03691509dfc61e31842e87a81`,fetcher)
    if(!data)return null;
    const {backdrop_path,poster_path,title,genres,overview}=data;
    return (
        <div className='py-10'>
         <div className='w-full h-[600px] relative'>
             <div className="absolute inset-0 bg-black bg-opacity-70"></div>
             <div className='w-full h-full bg-no-repeat bg-cover' style={{
             backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`
             }}></div>
         </div>   
         <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
             <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" className='object-cover w-full h-full rounded-xl' />
         </div>
         <h1 className='mb-10 text-3xl font-bold text-center text-white'>{title}</h1>
         {genres.length > 0 && (
            <div className="flex items-center justify-center mb-10 text-white gap-x-5">
                {genres.map((item)=>(
                    <span className='px-4 py-2 border rounded border-primary text-primary' key={item.id}>{item.name}</span>
                ))}
            </div>
         )}
         <p className='leading-relaxed text-center text-white max-w-[600px] mx-auto mb-10'>{overview}</p>
        <MovieCredit></MovieCredit>
        <MovieVideo></MovieVideo>
        <MovieSimilar></MovieSimilar>
        </div>
    );
};


function MovieVideo(){
    const {movieId}=useParams()
    const {data,error}=useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=23879be03691509dfc61e31842e87a81`,fetcher)
    if(!data) return null;
    const {results}=data;
    if(!results || results.length <= 0) return null;
        return(
        <div className='py-10'>
            <div className='flex flex-col gap-10'>
            {results.slice(0,2).map(item => (
                <div className="" key={item.id}>
                <h3 className='inline-block p-3 mb-5 ml-10 text-xl font-medium text-white rounded-md bg-secondary'>
                    {item.name}
                </h3>
                <div key={item.id} className="w-[1200px] m-auto aspect-video">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.key}`}
                 title="YouTube video player" frameborder="0" 
                 className='object-cover w-full h-full'
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
            ))}
            </div>
           
        </div>
    )
}
        function MovieCredit(){
            const {movieId}=useParams()
            const {data,error}=useSWR(
                `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=23879be03691509dfc61e31842e87a81`,fetcher)
             if (!data) return null;
             const {cast}=data;
             if(!cast || cast.length <= 0) return null;
             return(
                 <div className='py-10'>
                     <h2 className='mb-10 text-3xl text-center text-white'>Casts</h2>
                     <div className="grid grid-cols-4 gap-5">
                        {cast.slice(0,4).map(item =>(
                            <div className="cast-item" key={item.id}>
                             <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} className='w-full h-[350px] object-cover rounded-lg mb-3' alt="" />
                          <h3 className='text-xl font-medium text-center text-white'>{item.name}</h3>
                         </div>  
                        ))}
                                               
                     </div>
                 </div>
             )
         }
         function MovieSimilar(){
              const {movieId}=useParams()
            const {data,error}=useSWR(
                `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=23879be03691509dfc61e31842e87a81`,fetcher)
             if (!data) return null;
             const {results}=data;
             if(!results || results.length <= 0) return null;
             return(
                 <div className='py-10'>
                     <h2 className='mb-10 text-3xl font-medium'></h2>
                     <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {results.length > 0 && results.map(item =>(
       
        <SwiperSlide key={item.id}>
         <MovieCard item={item}></MovieCard>
        </SwiperSlide>

        ))}
  
        </Swiper>
        </div>
                 </div>
             )
         }
export default MovieDetail;