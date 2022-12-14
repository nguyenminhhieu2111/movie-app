import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import useSWR from 'swr';
import { fetcher } from '../../Config';
import useDebounce from '../hooks/useDebonce';
import Nav_bar from '../layout/Nav_bar';
import MovieCard from '../movie/MovieCard';


const itemsPerPage=20;
const MoviePage = () => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [filter,setFilter]=useState("")
    const [nextPage,setNextPage]=useState(1)
    const filterDebounce=useDebounce(filter,500)
    const [url,setUrl]=useState(`https://api.themoviedb.org/3/movie/popular?api_key=23879be03691509dfc61e31842e87a81&page=${nextPage}`)
    const handleFilterChange=(e)=>{
        setFilter(e.target.value)
    }
    const {data,error} = useSWR(url,fetcher)
    const loading= !data && !error
    useEffect(()=>{
        if(filterDebounce){
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=23879be03691509dfc61e31842e87a81&query=${filterDebounce}&page=${nextPage}`)
        } else{
            setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=23879be03691509dfc61e31842e87a81&page=${nextPage}`)
        }
    },[filterDebounce,nextPage])
   
    const movies=data?.results || [];
  
    useEffect(() => {
        if(!data || !data.total_results) return;
      setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data,itemOffset]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.total_results;
      setItemOffset(newOffset);
      setNextPage(event.selected + 1)
    };
  
    
    return (
        <>
        <div className='py-10 page-container_2'>
         <div className="flex mb-10">
             <div className="flex-1">
                 <input type="text" 
                 className='w-full p-4 text-white outline-none bg-slate-800'
                 placeholder='Type here to search ...' 
                 onChange={handleFilterChange}    
                 />
             </div>
             <button className='p-4 text-white bg-primary'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                 </svg>
                 </button>
         </div>
            {loading && <div className='w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin'></div>}
            <div className="grid grid-cols-4 gap-10">
                {!loading &&
                 movies.length > 0 && 
                 movies.map((item)=> (
                 <MovieCard key={item.id} item={item}></MovieCard>
                ))}
            </div>

            <div className="mt-10">
            <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="pagination"
            />
                      
            </div>
            
          
        </div>
       
        <Nav_bar></Nav_bar>
        </>
    );
};

export default MoviePage;