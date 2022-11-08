import { Fragment } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Nav_bar from "./components/layout/Nav_bar";
import MovieDetail from "./components/movie/MovieDetail";
import HomePage from "./components/pages/HomePage";
import Main from "./components/pages/Main";
import MoviePage from "./components/pages/MoviePage";

function App() {
  return (
   <Fragment>
   <Routes>
     <Route element={<Main></Main>}>
     <Route path="/" element={
     <>
     <Banner></Banner>
     <HomePage></HomePage>
     </>
     }></Route>

     <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
     <Route path="/movie/:movieId" element={<MovieDetail></MovieDetail>}></Route>
     </Route>
   </Routes>
   </Fragment>
  );
}

export default App;
