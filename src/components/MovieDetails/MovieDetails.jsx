import s from './MovieDetails.module.css';
import PropTypes from 'prop-types';



export default function MovieDetails(movie) {
  const base_img_url = 'https://image.tmdb.org/t/p/w342/';
  console.log(movie.movie)
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.movie_img}>
            <img src={`${base_img_url}${movie.movie.poster_path}`} alt ={movie.title} height="700" width="500"></img>
                </div>
            <div className={s.movie_info}>
                <div className={s.movie_text}>
              <h1>{movie.movie.title || movie.movie.name }</h1>
                 <h2> Release:{movie.movie.release_date } </h2>
              <p>{movie.movie.overview}</p>
               <h3>Genres</h3>
            <ul>
            {movie.movie.genres.map(el => (
              <li className = {s.genres} key={el.id}> {el.name}</li>
            ))}
              </ul>
              <p><span>IMDb:{movie.movie.vote_average}</span></p>
            </div>
             </div>
            </div>
</>
    )
}

MovieDetails.propTypes = {
    movie:PropTypes.shape({
        
    }),
    type:PropTypes.string,

}
