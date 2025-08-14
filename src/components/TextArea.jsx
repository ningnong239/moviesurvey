// TextArea Component - สำหรับ textarea fields
export default function TextArea({ 
  label, 
  name, 
  placeholder, 
  value, 
  onChange, 
  rows = 4 
}) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="textarea"
      />
    </div>
  );
}
