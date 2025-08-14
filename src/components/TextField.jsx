// TextField Component - สำหรับ input fields ที่สามารถใช้ซ้ำได้
export default function TextField({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false 
}) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input ${error ? 'input-error' : ''}`}
        required={required}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
