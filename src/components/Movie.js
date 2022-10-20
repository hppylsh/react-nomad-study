import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/* link는 새로고침없이도 화면을 바꿔주는 컴포넌트 */
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
