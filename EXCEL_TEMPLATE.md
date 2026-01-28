# Excel Template for Student Results Upload

## Required Excel Column Names

Your Excel file should have the following columns (you can use either English or Tamil names):

### Basic Student Information

| Column Name (English) | Alternative Names | Example Value |
|----------------------|-------------------|---------------|
| Register_Number | பதிவு எண், Register Number | 250206 |
| Application_Number | விண்ணப்ப எண், Application Number | 1011 |
| Name | பெயர், Student_Name | Kothai Chitrambalam |
| Date_of_Birth | பிறந்த தேதி, DOB | 08/11/1970 |
| Course_Code | பாடம், Course Code | 202502 |
| Degree | பட்டப்படிப்பு | பட்டப்படிப்பு |
| Subject | கந்தபுராணம் | கந்தபுராணம் |
| Course_Name_English | courseNameEnglish, Course Name | Kanda Puranam ( D. K. P. ) |

### Subject Marks (8 Subjects)

For each subject (1 to 8), you need these columns:

| Column Pattern | Description | Example |
|---------------|-------------|---------|
| Subject1_Obtained | Obtained marks for subject 1 | 5.67 |
| Subject2_Obtained | Obtained marks for subject 2 | 9.71 |
| Subject3_Obtained | Obtained marks for subject 3 | 10.00 |
| Subject4_Obtained | Obtained marks for subject 4 | 10.00 |
| Subject5_Obtained | Obtained marks for subject 5 | 10.00 |
| Subject6_Obtained | Obtained marks for subject 6 | 45.38 |
| Subject7_Obtained | Obtained marks for subject 7 | 50.00 |
| Subject8_Obtained | Obtained marks for subject 8 | 95.38 |

**Alternative column names:** You can also use `S1_Obtained`, `S2_Obtained`, etc.

### Result Information

| Column Name (English) | Alternative Names | Example Value |
|----------------------|-------------------|---------------|
| Result_Tamil | தேர்ச்சி நிலை | தேர்ச்சி |
| Result | தேர்ச்சி, Result_English | Pass |
| Grade | நன்றி நன்று, Grade_Tamil | Excellent |

---

## Sample Excel Structure

Here's how your Excel file should look:

| Register_Number | Application_Number | Name | Date_of_Birth | Course_Code | Subject1_Obtained | Subject2_Obtained | Subject3_Obtained | Subject4_Obtained | Subject5_Obtained | Subject6_Obtained | Subject7_Obtained | Subject8_Obtained | Result | Grade |
|----------------|-------------------|------|---------------|-------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|--------|-------|
| 250206 | 1011 | Kothai Chitrambalam | 08/11/1970 | 202502 | 5.67 | 9.71 | 10.00 | 10.00 | 10.00 | 45.38 | 50.00 | 95.38 | Pass | Excellent |
| 250207 | 1012 | Ramesh Kumar | 15/05/1985 | 202502 | 8.50 | 8.00 | 15.00 | 9.00 | 9.50 | 50.00 | 45.00 | 95.00 | Pass | Very Good |
| 250208 | 1013 | Priya Devi | 22/09/1990 | 202502 | 4.50 | 6.00 | 12.00 | 7.00 | 8.00 | 37.50 | 30.00 | 67.50 | Pass | Good |

---

## Subject Names (Default)

The 8 subjects are automatically named as follows:

1. அடையாளப்படு மதிப்பெண்
2. வழுவகையிற்று மதிப்பெண்
3. செய்முறைத் தேர்வு மதிப்பெண்
4. களப்பணி மதிப்பெண்
5. ஆய்வேடு மதிப்பெண்
6. ஒருங்கிணைந்த அடையாளப்படு மதிப்பெண்
7. இறுதித் தேர்வு
8. ஒருங்கிணைந்த மொத்த மதிப்பெண்

---

## Optional: Custom Subject Names

If you want to customize subject names, add these columns:

| Column Name | Description |
|------------|-------------|
| Subject1_Name | Custom name for subject 1 |
| Subject2_Name | Custom name for subject 2 |
| ... | ... |
| Subject8_Name | Custom name for subject 8 |

---

## Optional: Maximum Marks

If you want to specify maximum marks for each subject, add these columns:

| Column Name | Description | Default Value |
|------------|-------------|---------------|
| Subject1_Internal_Max | Internal max marks for subject 1 | 10 |
| Subject1_External_Max | External max marks for subject 1 | 20 |
| Subject2_Internal_Max | Internal max marks for subject 2 | 10 |
| Subject2_External_Max | External max marks for subject 2 | 10 |
| ... | ... | ... |

---

## Minimum Required Columns

At minimum, your Excel file must have:

1. **Register_Number** (or பதிவு எண்)
2. **Name** (or பெயர்)
3. **Subject1_Obtained** through **Subject8_Obtained** (or S1_Obtained through S8_Obtained)

All other fields will use default values if not provided.

---

## How to Create Your Excel File

### Option 1: Start from Scratch

1. Open Microsoft Excel or Google Sheets
2. Create column headers as shown above
3. Fill in your student data row by row
4. Save as `.xlsx` or `.xls` file
5. Upload to the application

### Option 2: Export from Existing System

If you already have student data in another system:

1. Export your data to Excel format
2. Rename columns to match the required names above
3. Ensure all required columns are present
4. Save and upload

---

## Tips for Success

✅ **Use consistent column names** - The application looks for specific column names  
✅ **Include all 8 subjects** - Even if a subject has 0 marks  
✅ **Check data types** - Numbers should be numbers, not text  
✅ **Remove empty rows** - Delete any blank rows between data  
✅ **Save as .xlsx** - Modern Excel format works best  
✅ **Test with sample data** - Try uploading a small file first  

---

## Troubleshooting

### "Error reading Excel file"
- Check that the file is .xlsx or .xls format
- Ensure column names match the required names
- Remove any merged cells or complex formatting

### "Result not found after upload"
- Verify the Register_Number column has the correct values
- Check for extra spaces in register numbers
- Ensure data is in the first sheet of the workbook

### "Marks not displaying correctly"
- Verify Subject1_Obtained through Subject8_Obtained columns exist
- Check that marks are numbers, not text
- Ensure no empty cells in marks columns (use 0 for zero marks)

---

## Example Excel File

You can create a test file with this structure:

**Sheet1:**

```
Register_Number | Name              | Subject1_Obtained | Subject2_Obtained | ... | Result | Grade
250206         | Kothai Chitrambalam| 5.67             | 9.71             | ... | Pass   | Excellent
250207         | Ramesh Kumar      | 8.50             | 8.00             | ... | Pass   | Very Good
```

---

## Need Help?

If you're having trouble creating the Excel file:

1. Check the console (F12 in browser) for detailed error messages
2. Verify your column names match exactly
3. Try uploading a single-row test file first
4. Contact support with a sample of your Excel file

---

**Last Updated:** January 27, 2026  
**Compatible with:** Microsoft Excel 2010+, Google Sheets, LibreOffice Calc
