import { useState } from "react";
import TextField from "./TextField";
import MovieRadioGroup from "./MovieRadioGroup";
import TextArea from "./TextArea";
import { validateForm } from "../utils/validation";

export default function SurveyForm({ movies, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    comment: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // ล้าง error เมื่อผู้ใช้เริ่มพิมพ์
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", movie: "", comment: "" });
    setErrors({});
  };

  return (
    <div className="container">
      <h1>สำรวจความชอบภาพยนตร์</h1>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="ชื่อ"
          name="name"
          placeholder="กรอกชื่อของคุณ"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required={true}
        />

        <TextField
          label="อีเมล"
          name="email"
          type="email"
          placeholder="กรอกอีเมลของคุณ"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required={true}
        />

        <MovieRadioGroup
          movies={movies}
          selectedMovie={formData.movie}
          onChange={handleChange}
          error={errors.movie}
        />

        <TextArea
          label="ความคิดเห็น (ไม่บังคับ)"
          name="comment"
          placeholder="ใส่ความคิดเห็นของคุณเกี่ยวกับภาพยนตร์"
          value={formData.comment}
          onChange={handleChange}
        />

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
