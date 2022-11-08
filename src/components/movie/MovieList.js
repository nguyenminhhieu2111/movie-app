import React, { useEffect, useState } from 'react';
import {SwiperSlide,Swiper} from "swiper/react"
import "swiper/scss"
import useSWR from 'swr';
import { fetcher } from '../../Config';
import Nav_bar from '../layout/Nav_bar';
import MovieCard from './MovieCard';
//https://api.themoviedb.org/3/movie/now_playing?api_key=23879be03691509dfc61e31842e87a81
const MovieList = ({type="now_playing"}) => {
    const { data} = useSWR(
        `https://api.themoviedb.org/3/movie/${type}?api_key=23879be03691509dfc61e31842e87a81`, fetcher)
    const movies=data?.results || [];
    return (
        <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 && movies.map(item =>(
       
        <SwiperSlide key={item.id}>
         <MovieCard item={item}></MovieCard>
        </SwiperSlide>
        ))}
  
        </Swiper>
        
        </div>
    );
};

export default MovieList;