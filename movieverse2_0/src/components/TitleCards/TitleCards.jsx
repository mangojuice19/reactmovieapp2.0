import React, { useRef, useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
const API_KEY = "c73c92c55ec9d9b1d302420a815b43e1";
const BASE_URL = "https://api.themoviedb.org/3";

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {method: 'GET', headers: {accept: 'application/json'}};

const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {

 const fetchMoviesByCategory=async()=>{
   console.log("category:",category)
   try{
     const response=await  fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`, options);
     const data=await response.json();
     console.log("movie response data: ",data);
     setApiData(data.results);
  }catch(error){
   console.log("error while fetching movie: ",error);
  }
 }
 
fetchMoviesByCategory();
 
  cardsRef.current.addEventListener('wheel', handleWheel);
}, []);


  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular On MovieVerse"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.length > 0 ? (
          apiData.map((movie, index) => (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title || movie.title}
              />
              <p>{movie.original_title || movie.title}</p>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  )
}


// const TitleCards = ({ title, category }) => {
//   const [apiData, setApiData] = useState([]);
//   const cardsRef = useRef();
//   const navigate = useNavigate();

//   const options = { method: "GET", headers: { accept: "application/json" } };

//   const handleWheel = (event) => {
//     event.preventDefault();
//     cardsRef.current.scrollLeft += event.deltaY;
//   };

//   useEffect(() => {
//     const fetchMoviesByCategory = async () => {
//       try {
//         const response = await fetch(
//           `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`,
//           options
//         );
//         const data = await response.json();
//         setApiData(data.results);
//       } catch (error) {
//         console.log("Error while fetching movie: ", error);
//       }
//     };

//     fetchMoviesByCategory();

//     if (cardsRef.current) {
//       cardsRef.current.addEventListener("wheel", handleWheel);
//     }
//   }, [category]);

//   return (
//     <div className="titlecards">
//       <h2>{title ? title : "Popular On MovieVerse"}</h2>
//       <div className="card-list" ref={cardsRef}>
//         {apiData.length > 0 ? (
//           apiData.map((movie) => (
//             <div
//               className="card"
//               key={movie.id}
//               onClick={() => navigate(`/player/${movie.id}`)}
//               style={{ cursor: "pointer" }}
//             >
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//                 alt={movie.original_title || movie.title}
//               />
//               <p>{movie.original_title || movie.title}</p>
//             </div>
//           ))
//         ) : (
//           <p>Loading movies...</p>
//         )}
//       </div>
//     </div>
//   );
// };

export default TitleCards;
