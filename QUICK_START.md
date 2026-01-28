# Quick Start Guide - மாணவர் தேர்வு முடிவுகள்

## 🚀 Quick Start (3 Steps)

### Step 1: Start the Application
```bash
cd "/home/vinoth/Downloads/S2N FORM/result"
npm run dev
```

### Step 2: Open Browser
Visit: `http://localhost:5173/`

### Step 3: Search for Results
Enter register number (e.g., `E24AI001`) and click **தேடு (Search)**

---

## 📋 Sample Register Numbers to Test

| Register No | Result | Description |
|------------|--------|-------------|
| **E24AI001** | ✅ தேர்ச்சி | All subjects passed |
| **E24AI002** | ✅ தேர்ச்சி | All subjects passed |
| **E24AI003** | ❌ தோல்வி | One subject failed (shows red) |
| **E24CS001** | ✅ தேர்ச்சி | Excellent marks |
| **E24EC001** | ✅ தேர்ச்சி | Good marks |

---

## 📁 Where is the Data?

**File Location:** `src/data/studentsData.json`

**To Add New Students:**
1. Open `src/data/studentsData.json`
2. Copy an existing student object
3. Modify the details
4. Save the file
5. Refresh browser

---

## 🎨 What You'll See

### 1. Welcome Screen
- Title in Tamil and English
- Input field for register number
- Search and Reset buttons
- Sample register numbers

### 2. Search Results
- Student details (Name, Register No, Department, Semester)
- Excel-like marks table
- Subject-wise marks (Internal, External, Total)
- Pass/Fail color coding
- Overall result badge

### 3. Not Found
- Error message if register number doesn't exist
- Hint to enter correct number

---

## 🎯 Key Features

✅ **No Backend** - Everything runs in browser  
✅ **Tamil Support** - Full Tamil language rendering  
✅ **Excel-like Table** - Professional result sheet  
✅ **Color Coded** - Green for pass, Red for fail  
✅ **Responsive** - Works on mobile, tablet, desktop  
✅ **Print Ready** - Use Ctrl+P to print results  

---

## 🔧 Common Tasks

### Print a Result
1. Search for student
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Print or save as PDF

### Reset Search
Click the **மீட்டமை (Reset)** button

### Search Another Student
Just enter new register number and search

---

## 📊 Understanding the Result Table

| Column | Tamil | Description |
|--------|-------|-------------|
| S.No | வ.எண் | Serial number |
| Subject Code | பாட குறியீடு | Unique code for subject |
| Subject Name | பாடத்தின் பெயர் | Name in Tamil |
| Internal | உள் | Internal marks (max 20) |
| External | வெளி | External marks (max 80) |
| Total | மொத்தம் | Total marks (max 100) |
| Result | முடிவு | தேர்ச்சி or தோல்வி |

---

## 🎨 Color Meanings

| Color | Meaning |
|-------|---------|
| 🟢 Green | தேர்ச்சி (Pass) |
| 🔴 Red | தோல்வி (Fail) |
| 🔵 Purple | Headers and buttons |
| ⚪ White | Content background |

---

## 💡 Tips

1. **Case Insensitive:** You can type `e24ai001` or `E24AI001`
2. **Spaces:** Leading/trailing spaces are automatically removed
3. **Mobile:** Swipe left/right to see full table on mobile
4. **Print:** Search form automatically hides when printing

---

## 🐛 Troubleshooting

### Tamil Text Shows as Boxes
**Solution:** Wait for fonts to load (2-3 seconds on first visit)

### Table Too Wide on Mobile
**Solution:** Scroll horizontally or rotate device to landscape

### Search Not Working
**Solution:** Make sure register number exists in the data file

### Page Not Loading
**Solution:** Check if dev server is running (`npm run dev`)

---

## 📞 Need Help?

1. Check `README.md` for detailed documentation
2. Check `DOCUMENTATION.md` for technical details
3. Verify `src/data/studentsData.json` has correct format

---

## 🎓 For Developers

### Project Structure
```
src/
├── data/studentsData.json  ← Add students here
├── App.jsx                 ← Main component
├── App.css                 ← Styling
└── index.css               ← Global styles
```

### Technologies Used
- React 19.2.0
- Vite (Build tool)
- Pure CSS3 (No frameworks)
- Local JSON (No database)

---

**Made with ❤️ for Tamil Students**

**Version:** 1.0.0  
**Status:** ✅ Production Ready
