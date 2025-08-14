# 🎬 Movie Survey App

แอปพลิเคชันสำรวจความชอบภาพยนตร์ที่สร้างด้วย React + Vite

## ✨ Features

- 📝 ฟอร์มสำรวจความชอบภาพยนตร์
- ✅ การตรวจสอบความถูกต้องของข้อมูล (Form Validation)
- 🎯 การเลือกภาพยนตร์แบบ Radio Buttons
- 💬 ฟิลด์ความคิดเห็น (ไม่บังคับ)
- 📊 หน้าสรุปข้อมูลแบบสำรวจ
- 🔄 ปุ่มรีเซ็ตและเริ่มใหม่

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm หรือ yarn

### Installation

1. Clone repository
```bash
git clone <your-repo-url>
cd moviesurvey
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. เปิดเบราว์เซอร์ไปที่ `http://localhost:5175`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI Components
├── constants/           # Constants และ Configuration
├── utils/              # Utility functions
├── App.jsx             # Main App Component
├── App.css             # Main Styles
├── main.jsx            # Entry Point
└── index.css           # Global Styles
```

## 🎯 Requirements Met

### Required Features ✅
- [x] กรอกชื่อและอีเมล (required fields)
- [x] ตรวจสอบความถูกต้องของอีเมล
- [x] เลือกภาพยนตร์จากรายการที่กำหนด
- [x] กรอกความคิดเห็น (optional)
- [x] Form validation พร้อมข้อความแจ้งเตือนภาษาไทย
- [x] หน้าสรุปข้อมูลเมื่อส่งสำเร็จ
- [x] ปุ่มรีเซ็ตและเริ่มใหม่

### Code Quality Principles ✅
- [x] **DRY** - ใช้ reusable components และ .map() สำหรับรายการ
- [x] **High Cohesion** - แยกไฟล์ตามหน้าที่
- [x] **Loose Coupling** - components สื่อสารผ่าน props
- [x] **Single Responsibility** - แต่ละ component มีหน้าที่เดียว

## 🎨 UI Components

- **TextField** - สำหรับ input fields
- **MovieRadioGroup** - สำหรับเลือกหนังแบบ radio buttons
- **TextArea** - สำหรับความคิดเห็น
- **SurveyForm** - ฟอร์มหลัก
- **SurveySummary** - หน้าสรุปข้อมูล

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

แอปพลิเคชันรองรับการใช้งานบนอุปกรณ์ทุกขนาดหน้าจอ

## 🚀 Deployment

```bash
npm run build
```

ไฟล์ที่ build จะอยู่ในโฟลเดอร์ `dist/`

## 📄 License

This project is created for educational purposes.

---

**สร้างโดย:** [Your Name]  
**วันที่:** [Current Date]
