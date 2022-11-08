import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../Config';
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/scss"
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const {data} = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=23879be03691509dfc61e31842e87a81`, fetcher)
   
        const movies=data?.results || [];
        console.log(data)
     
    return (
        <section className="banner h-[300px] page-container overflow-hidden mb-10">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
      {movies.length > 0 &&
      movies.map((item)=>(
        <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
          </SwiperSlide>
      ))}
      </Swiper>
     </section>
    );
};
function BannerItem({item}){
  const navigate=useNavigate();
    const{
        title,
        poster_path,
        id
        }=item
        
    return(
        <div className="relative w-full h-full rounded-lg">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg "></div>
          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt=""
          className="object-cover object-center w-full h-full rounded-lg" />
        <div className="absolute w-full text-white left-5 bottom-5">
          <h2 className="mb-5 text-3xl font-bold">{title}</h2>
          <div className="flex items-center mb-8 gap-x-3">
            <span className="px-4 py-2 border border-white rounded-md">Adventure</span>
            <span className="px-4 py-2 border border-white rounded-md">Adventure</span>
            <span className="px-4 py-2 border border-white rounded-md">Adventure</span>
          </div>
          <Button className="flex items-center justify-center" bg-bgColor='secondary' onClick={()=> navigate(`/movie/${id}`)}>
            <span>Watch Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
          </Button>
        </div>
        </div>
    )
}

export default Banner;