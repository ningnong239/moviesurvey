// ฟังก์ชันตรวจสอบความถูกต้องของอีเมล
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ฟังก์ชันตรวจสอบฟอร์มทั้งหมด
export const validateForm = (formData) => {
  const errors = {};
  
  // ตรวจสอบชื่อ
  if (!formData.name.trim()) {
    errors.name = "โปรดใส่ชื่อของคุณ";
  }
  
  // ตรวจสอบอีเมล
  if (!formData.email.trim()) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (!validateEmail(formData.email)) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }
  
  // ตรวจสอบการเลือกหนัง
  if (!formData.movie) {
    errors.movie = "กรุณาเลือกหนังที่คุณชอบ";
  }
  
  return errors;
};
