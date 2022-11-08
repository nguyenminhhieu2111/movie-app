import React, { Fragment } from 'react';
import Nav_bar from '../layout/Nav_bar';
import Nav_right from '../layout/Nav_right';
import MovieList from '../movie/MovieList';

const HomePage = () => {
    return (
      
        <Fragment>
        <Nav_bar></Nav_bar>
        <Nav_right></Nav_right>
               <section className="pb-20 movie-layout page-container">
       <h2 className="mb-10 text-3xl font-bold text-white capitalize">
         Now playing
       </h2>
       <MovieList></MovieList>
      
     </section>

     <section className="pb-20 movie-layout page-container">
       <h2 className="mb-10 text-3xl font-bold text-white capitalize">
         Top-rated
       </h2>
       <MovieList type="top_rated"></MovieList>
     </section>

     <section className="pb-10 movie-layout page-container">
       <h2 className="mb-10 text-3xl font-bold text-white capitalize">
         Top Trending
       </h2>
      <MovieList type="popular"></MovieList>
      
     </section>
        </Fragment>
    );
};

export default HomePage;