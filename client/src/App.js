import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getMoviesFromApi } from './features/movies/moviesSlice';

import './App.css';

function App() {

  const {movies} = useSelector( (store) => store.movies)
  const dispatch = useDispatch()

  const movieElements = movies.map((movie) => <p key={movie.id}>{movie.title}</p>);

  useEffect(()=>{
    dispatch(getMoviesFromApi("game"));
  },[])

  return (
    <div className="">
      <h1>Hello to my Movie collection</h1>
      {movieElements}
    </div>
  );
}

export default App;
