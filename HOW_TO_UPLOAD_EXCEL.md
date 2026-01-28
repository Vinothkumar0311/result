# How to Upload Excel Sheet to Show Results

## Quick Start Guide

### Step 1: Prepare Your Excel File

Your Excel file should contain student data with these columns:

**Minimum Required Columns:**
- `Register_Number` (or `பதிவு எண்`) - Student register number
- `Name` (or `பெயர்`) - Student name  
- `Subject1_Obtained` to `Subject8_Obtained` - Marks for 8 subjects

**Example Excel Structure:**

| Register_Number | Name | Subject1_Obtained | Subject2_Obtained | Subject3_Obtained | Subject4_Obtained | Subject5_Obtained | Subject6_Obtained | Subject7_Obtained | Subject8_Obtained | Result | Grade |
|----------------|------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|--------|-------|
| 250206 | Kothai Chitrambalam | 5.67 | 9.71 | 10.00 | 10.00 | 10.00 | 45.38 | 50.00 | 95.38 | Pass | Excellent |
| 250207 | Ramesh Kumar | 8.50 | 8.00 | 15.00 | 9.00 | 9.50 | 50.00 | 45.00 | 95.00 | Pass | Very Good |

📄 **See `EXCEL_TEMPLATE.md` for complete column details and examples**

---

### Step 2: Upload Your Excel File

1. **Open the Application**
   - Navigate to http://localhost:5173/ in your browser
   - You'll see the Student Examination Results page

2. **Click the Upload Button**
   - Look for the **"📤 Choose Excel File (.xlsx, .xls)"** purple button
   - It's in the "Excel File Upload" section below the header

3. **Select Your File**
   - Click the button to open file browser
   - Select your `.xlsx` or `.xls` file
   - Click "Open"

4. **Wait for Confirmation**
   - You'll see "📤 Uploading..." message
   - Then "✅ Successfully loaded X student records!" appears
   - The number of students loaded will be displayed

---

### Step 3: Search for Student Results

1. **Enter Register Number**
   - In the "பதிவு எண் (Register Number)" field
   - Type the student's register number (e.g., 250206)

2. **Click Search Button**
   - Click the purple "தேடு (Search)" button
   - Or press Enter

3. **View Results**
   - Student information appears with yellow headers
   - Marks table shows with teal headers
   - All 8 subjects with obtained marks
   - Pass/Fail status and grade at the bottom

---

## Visual Guide

### Before Upload
```
┌─────────────────────────────────────┐
│  மாணவர் தேர்வு முடிவுகள்           │
│  Student Examination Results       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 📁 Excel File Upload                │
│                                     │
│  📤 Choose Excel File (.xlsx, .xls) │ ← Click here
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ பதிவு எண் (Register Number):       │
│ [________________]                  │
│ [தேடு] [மீட்டமை]                   │
└─────────────────────────────────────┘
```

### After Upload
```
┌─────────────────────────────────────┐
│ 📁 Excel File Upload                │
│                                     │
│  📤 Choose Excel File (.xlsx, .xls) │
│                                     │
│  ✅ Successfully loaded 50 student  │ ← Success message
│     records!                        │
│                                     │
│  📊 50 student records loaded       │ ← Info box
│     from Excel                      │
└─────────────────────────────────────┘
```

---

## Features

### ✅ Automatic Data Detection
The application automatically detects and maps these column names:

**Register Number:**
- `Register_Number`, `பதிவு எண்`, `Register Number`

**Student Name:**
- `Name`, `பெயர்`, `Student_Name`

**Date of Birth:**
- `Date_of_Birth`, `பிறந்த தேதி`, `DOB`

**Marks (for each subject 1-8):**
- `Subject1_Obtained`, `S1_Obtained`
- `Subject2_Obtained`, `S2_Obtained`
- ... and so on

### ✅ Flexible Format
- Works with `.xlsx` (Excel 2007+) and `.xls` (Excel 97-2003)
- Supports both English and Tamil column names
- Automatically fills missing fields with defaults

### ✅ Real-time Feedback
- Upload progress indicator
- Success/error messages
- Student count display
- Console logging for debugging

---

## Common Scenarios

### Scenario 1: Upload and Search Immediately
```
1. Click "Choose Excel File"
2. Select your file
3. Wait for "Successfully loaded" message
4. Type register number in search box
5. Click Search
6. View results!
```

### Scenario 2: Upload Multiple Times
```
1. Upload first Excel file → 10 students loaded
2. Search works with these 10 students
3. Upload second Excel file → 20 students loaded
4. Now search works with the NEW 20 students
   (Previous 10 are replaced)
```

### Scenario 3: Switch Between Excel and Default Data
```
1. Application starts with 3 default students (250206, 250207, 250208)
2. Upload your Excel file → Your data is used
3. Refresh the page → Back to default 3 students
4. Upload again → Your data is used again
```

---

## Troubleshooting

### ❌ "Error reading Excel file"

**Possible Causes:**
- File is not .xlsx or .xls format
- File is corrupted
- Column names don't match expected format

**Solutions:**
1. Save your file as .xlsx format
2. Check column names match the template
3. Remove any merged cells or complex formatting
4. Try with a simple 1-row test file first

---

### ❌ "Result not found" after upload

**Possible Causes:**
- Register number doesn't exist in uploaded file
- Extra spaces in register number
- Case sensitivity issue

**Solutions:**
1. Open browser console (F12) and check uploaded data
2. Verify register numbers in your Excel file
3. Remove extra spaces from register numbers
4. Try searching with exact value from Excel

---

### ❌ Marks not displaying correctly

**Possible Causes:**
- Subject columns missing
- Marks are text instead of numbers
- Empty cells in marks columns

**Solutions:**
1. Ensure all Subject1_Obtained through Subject8_Obtained columns exist
2. Format marks columns as numbers in Excel
3. Replace empty cells with 0
4. Check console for transformation errors

---

## Tips for Best Results

### ✅ Excel File Preparation
1. **Use first row for headers** - Column names in row 1
2. **Start data from row 2** - No empty rows
3. **Remove formatting** - Plain text and numbers only
4. **Save as .xlsx** - Modern Excel format
5. **Test with sample** - Try 2-3 rows first

### ✅ Column Naming
1. **Use underscores** - `Register_Number` not `Register Number`
2. **Be consistent** - Same naming throughout
3. **Follow template** - Use provided column names
4. **Check spelling** - Exact match required

### ✅ Data Quality
1. **No empty cells** - Use 0 for zero marks
2. **Consistent format** - Same date format throughout
3. **Valid numbers** - Marks should be numeric
4. **Unique register numbers** - No duplicates

---

## Advanced Usage

### Custom Subject Names
Add these columns to customize subject names:
```
Subject1_Name, Subject2_Name, ... Subject8_Name
```

### Maximum Marks
Add these columns to specify max marks:
```
Subject1_Internal_Max, Subject1_External_Max
Subject2_Internal_Max, Subject2_External_Max
...
```

### Multiple Courses
You can include students from different courses in the same Excel file. The application will display course information from these columns:
```
Course_Code, Degree, Subject, Course_Name_English
```

---

## Example Workflow

### Complete Example: Uploading 100 Students

1. **Prepare Excel File**
   ```
   - Open Excel
   - Create columns: Register_Number, Name, Subject1_Obtained, ..., Subject8_Obtained
   - Enter 100 rows of student data
   - Save as "student_results.xlsx"
   ```

2. **Upload to Application**
   ```
   - Open http://localhost:5173/
   - Click "Choose Excel File"
   - Select "student_results.xlsx"
   - See "✅ Successfully loaded 100 student records!"
   ```

3. **Search and View**
   ```
   - Type first student's register number
   - Click Search
   - View complete result with all marks
   - Click Reset to search for another student
   ```

4. **Print or Save**
   ```
   - After viewing result, use browser's Print function (Ctrl+P)
   - The result is print-optimized
   - Save as PDF if needed
   ```

---

## Quick Reference

| Action | Steps |
|--------|-------|
| **Upload Excel** | Click purple button → Select file → Wait for success |
| **Search Student** | Enter register number → Click Search |
| **View Another** | Click Reset → Enter new number → Search |
| **Re-upload** | Click Choose File again → Select new file |
| **Print Result** | View result → Press Ctrl+P |

---

## Getting Help

### Check Console for Details
1. Press **F12** in browser
2. Click **Console** tab
3. Look for "Uploaded data:" message
4. Verify your data was read correctly

### Common Console Messages
```javascript
// Success
"Uploaded data: Array(50)" ← 50 students loaded

// Error
"Error reading Excel file: ..." ← Check file format
```

---

## Summary

**3 Simple Steps:**

1. **📁 Prepare** - Create Excel file with required columns
2. **📤 Upload** - Click button and select your file  
3. **🔍 Search** - Enter register number and view results

**That's it!** Your Excel data is now searchable in the application.

---

**Need the Excel template?** See `EXCEL_TEMPLATE.md`  
**Need technical details?** See `EXCEL_UPLOAD_GUIDE.md`  
**Need general help?** See `README.md`

---

**Last Updated:** January 27, 2026  
**Status:** ✅ Feature Complete and Working
