# மாணவர் தேர்வு முடிவுகள் (Student Examination Results)

A ReactJS frontend-only application for displaying student exam results with Tamil language support and Excel-like table formatting.

## 🎯 Features

- **Excel File Upload**: Upload Excel files (.xlsx, .xls) with student data for instant results
- **Tamil Language Support**: Full support for Tamil text using Noto Sans Tamil font
- **Excel-like Layout**: Clean, professional table design matching Excel format
- **Search Functionality**: Search students by register number (பதிவு எண்)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Color-Coded Results**: Visual distinction with yellow headers and teal table headers
- **No Backend Required**: All data is stored locally or uploaded via Excel
- **Print-Friendly**: Optimized for printing result sheets

## 📁 Project Structure

```
result/
├── src/
│   ├── data/
│   │   └── studentsData.json    # Student result data
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Component-specific styles
│   ├── index.css                # Global styles and Tamil font imports
│   └── main.jsx                 # Application entry point
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "/home/vinoth/Downloads/S2N FORM/result"
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## 📤 Excel Upload Feature

### Quick Start

1. **Prepare Your Excel File**
   - Create an Excel file (.xlsx or .xls) with student data
   - Required columns: `Register_Number`, `Name`, `Subject1_Obtained` through `Subject8_Obtained`
   - See `EXCEL_TEMPLATE.md` for complete column details

2. **Upload to Application**
   - Click the purple **"📤 Choose Excel File"** button
   - Select your Excel file
   - Wait for "✅ Successfully loaded X student records!" message

3. **Search and View Results**
   - Enter student register number in search box
   - Click Search to view complete results

### Documentation

- **📘 HOW_TO_UPLOAD_EXCEL.md** - Complete step-by-step upload guide
- **📋 EXCEL_TEMPLATE.md** - Excel file format and column requirements
- **🔧 EXCEL_UPLOAD_GUIDE.md** - Technical implementation details

### Supported Excel Formats

- `.xlsx` (Excel 2007 and later) ✅
- `.xls` (Excel 97-2003) ✅

### Features

- ✅ Automatic column detection (English and Tamil names)
- ✅ Real-time upload status feedback
- ✅ Support for multiple students in one file
- ✅ Flexible column naming (underscores or spaces)
- ✅ Default values for missing fields


## 📊 Data Structure

The student data is stored in `src/data/studentsData.json` with the following structure:

```json
[
  {
    "பதிவு எண்": "E24AI001",
    "மாணவர் பெயர்": "Student Name",
    "பாடப்பிரிவு": "Department",
    "செமஸ்டர்": "Semester",
    "பாடங்கள்": [
      {
        "code": "Subject Code",
        "name": "Subject Name in Tamil",
        "internal": 20,
        "external": 80,
        "total": 100,
        "result": "தேர்ச்சி" or "தோல்வி"
      }
    ],
    "overallResult": "தேர்ச்சி" or "தோல்வி"
  }
]
```

### Column Descriptions

| Tamil Column | English Translation | Description |
|--------------|---------------------|-------------|
| பதிவு எண் | Register Number | Unique student identifier |
| மாணவர் பெயர் | Student Name | Full name of the student |
| பாடப்பிரிவு | Department | Academic department/branch |
| செமஸ்டர் | Semester | Current semester |
| பாடங்கள் | Subjects | Array of subject-wise marks |
| code | Subject Code | Unique subject identifier |
| name | Subject Name | Name of the subject in Tamil |
| internal | Internal Marks | Internal assessment marks (max 20) |
| external | External Marks | External exam marks (max 80) |
| total | Total Marks | Sum of internal + external (max 100) |
| result | Result | தேர்ச்சி (Pass) or தோல்வி (Fail) |
| overallResult | Overall Result | Final result status |

## 🎨 UI Components

### 1. Search Section
- Input field for register number (பதிவு எண்)
- Submit button to search
- Reset button to clear the form

### 2. Student Information Display
- Register Number
- Student Name
- Department
- Semester

### 3. Marks Table
- Subject Code
- Subject Name (in Tamil)
- Internal Marks (out of 20)
- External Marks (out of 80)
- Total Marks (out of 100)
- Result (Pass/Fail with color coding)

### 4. Overall Result Badge
- Displays overall result with color coding
- Green for Pass (தேர்ச்சி)
- Red for Fail (தோல்வி)

## 📝 Sample Register Numbers

You can test the application with these sample register numbers:

- `E24AI001` - Pass with all subjects cleared
- `E24AI002` - Pass with all subjects cleared
- `E24AI003` - Fail (one subject failed)
- `E24CS001` - Pass with excellent marks
- `E24EC001` - Pass with good marks

## 🎨 Design Features

- **Modern Gradient Background**: Purple gradient for visual appeal
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **Excel-like Table**: Professional table design with borders and alternating row colors
- **Pass/Fail Color Coding**: 
  - Green background for passed subjects
  - Red background for failed subjects
- **Responsive Layout**: Adapts to all screen sizes
- **Tamil Font Support**: Uses Noto Sans Tamil for proper rendering

## 🔧 Customization

### Adding New Students

Edit `src/data/studentsData.json` and add new student objects following the existing structure.

### Changing Colors

Modify the CSS variables and gradient colors in `src/App.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Pass color: `#22c55e`
- Fail color: `#ef4444`

### Modifying Table Layout

Update the table structure in `src/App.jsx` and corresponding styles in `src/App.css`.

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🖨️ Print Support

The application includes print-optimized styles. To print a result:
1. Search for a student
2. Use browser's print function (Ctrl+P / Cmd+P)
3. The search form will be hidden automatically

## 🛠️ Technologies Used

- **React 19.2.0**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling with gradients, animations, and flexbox/grid
- **Google Fonts**: Noto Sans Tamil and Inter fonts

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Development Notes

- **No Backend**: All data is client-side
- **No API Calls**: Data is imported directly from JSON
- **State Management**: Uses React useState hook only
- **Functional Components**: No class components used
- **Tamil Text**: Properly encoded in UTF-8

## 🤝 Contributing

To add more features or improve the application:

1. Modify the component in `src/App.jsx`
2. Update styles in `src/App.css`
3. Add more student data in `src/data/studentsData.json`
4. Test thoroughly with different register numbers

## 📞 Support

For any issues or questions, please refer to the code comments or React documentation.

---

**Made with ❤️ for Tamil students**
