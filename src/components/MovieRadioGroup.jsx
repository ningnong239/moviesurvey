// MovieRadioGroup Component - สำหรับแสดงรายการหนังแบบ radio buttons
export default function MovieRadioGroup({ 
  movies, 
  selectedMovie, 
  onChange, 
  error 
}) {
  return (
    <div className="form-control">
      <label className="label">
        เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
      </label>
      <div className="movie-options">
        {movies.map((movie) => (
          <label key={movie.id} className="movie-option">
            <input
              type="radio"
              name="movie"
              value={movie.title}
              checked={selectedMovie === movie.title}
              onChange={onChange}
              className="radio-input"
            />
            <span className="movie-info">
              <strong>{movie.title}</strong> ({movie.year}) — {movie.director}
            </span>
          </label>
        ))}
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
