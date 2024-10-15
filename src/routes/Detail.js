import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const {id} = useParams();
  //useParams : parameter값을 사용할 수 있음
  console.log(id);

  const [movie, setMovie] = useState([]);

  //새로운 방법
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);
  
  return <h1>Detail</h1>;
}

export default Detail;
