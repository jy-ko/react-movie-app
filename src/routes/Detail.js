import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState('');
    const getMovie = async() => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
          ).json();
          setMovie(json.data.movie);
          setLoading(false);
    };
    useEffect(()=> {
        getMovie();
    }, []);
    return (
    <div>
        <div>
            <h1>{movie.title}</h1>
            <h4>{movie.year}</h4>
            <p>{movie.description_full}</p>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
        </div>
        <div>
            <Link to="/">Back to List</Link>
        </div>
    </div>
    );
}

export default Detail;