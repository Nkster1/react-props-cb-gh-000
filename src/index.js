// Code goes here
import ReactDOM from "react-dom";


const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
  title = "Jurassic World"

  poster = "http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"

  genres =  {jurassicWorldGenres}
  />,
  document.getElementById('root')
)
