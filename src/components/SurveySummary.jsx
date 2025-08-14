export default function SurveySummary({ data, onRestart }) {
  return (
    <div className="container">
      <h1>สรุปข้อมูลแบบสำรวจ</h1>
      
      <div className="summary-content">
        <div className="summary-item">
          <strong>ชื่อ:</strong> {data.name}
        </div>
        
        <div className="summary-item">
          <strong>อีเมล:</strong> {data.email}
        </div>
        
        <div className="summary-item">
          <strong>ภาพยนตร์ที่เลือก:</strong> {data.movie}
        </div>
        
        {data.comment && (
          <div className="summary-item">
            <strong>ความคิดเห็น:</strong> 
            <p className="comment-text">{data.comment}</p>
          </div>
        )}
      </div>

      <div className="button-group">
        <button onClick={onRestart} className="btn btn-primary">
          เริ่มทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
}
