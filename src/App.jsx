import { useState } from "react";
import "./App.css";

export default function App() {
  const movies = [
    { title: "Avatar", year: "2009", director: "James Cameron" },
    { title: "Inception", year: "2010", director: "Christopher Nolan" },
    { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
    { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
    { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
    { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
  ];

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    comment: ""
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "โปรดใส่ชื่อของคุณ";
    if (!formData.email.trim()) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!formData.movie) newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", movie: "", comment: "" });
    setErrors({});
  };

  const handleRestart = () => {
    setFormData({ name: "", email: "", movie: "", comment: "" });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="container">
        <h1>สรุปข้อมูลแบบสำรวจ</h1>
        <div className="summary-content">
          <div className="summary-item">
            <strong>ชื่อ:</strong> {formData.name}
          </div>
          <div className="summary-item">
            <strong>อีเมล:</strong> {formData.email}
          </div>
          <div className="summary-item">
            <strong>ภาพยนตร์ที่เลือก:</strong> {formData.movie}
          </div>
          {formData.comment && (
            <div className="summary-item">
              <strong>ความคิดเห็น:</strong>
              <p className="comment-text">{formData.comment}</p>
            </div>
          )}
        </div>
        <div className="button-group">
          <button onClick={handleRestart} className="btn btn-primary">
            เริ่มทำแบบสำรวจใหม่
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>สำรวจความชอบภาพยนตร์</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">ชื่อ <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            placeholder="กรอกชื่อของคุณ"
            value={formData.name}
            onChange={handleChange}
            className={`input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-control">
          <label className="label">อีเมล <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            placeholder="กรอกอีเมลของคุณ"
            value={formData.email}
            onChange={handleChange}
            className={`input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-control">
          <label className="label">เลือกหนังที่คุณชอบ <span className="text-red-500">*</span></label>
          <div className="movie-options">
            {movies.map((movie, index) => (
              <label key={index} className="movie-option">
                <input
                  type="radio"
                  name="movie"
                  value={movie.title}
                  checked={formData.movie === movie.title}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="movie-info">
                  <strong>{movie.title}</strong> ({movie.year}) — {movie.director}
                </span>
              </label>
            ))}
          </div>
          {errors.movie && <p className="error-text">{errors.movie}</p>}
        </div>

        <div className="form-control">
          <label className="label">ความคิดเห็น (ไม่บังคับ)</label>
          <textarea
            name="comment"
            placeholder="ใส่ความคิดเห็นของคุณเกี่ยวกับภาพยนตร์"
            value={formData.comment}
            onChange={handleChange}
            className="textarea"
            rows={4}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            ส่งแบบสำรวจ
          </button>
          <button type="button" onClick={handleReset} className="btn btn-secondary">
            รีเซ็ต
          </button>
        </div>
      </form>
    </div>
  );
}

