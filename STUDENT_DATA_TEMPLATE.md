# Student Data Template

## How to Add New Students

Copy the template below and add it to `src/data/studentsData.json`

---

## Template (Copy this)

```json
{
  "பதிவு எண்": "E24XX000",
  "மாணவர் பெயர்": "Student Name in Tamil",
  "பாடப்பிரிவு": "Department Name in Tamil",
  "செமஸ்டர்": "II",
  "பாடங்கள்": [
    {
      "code": "24XX001",
      "name": "Subject 1 Name in Tamil",
      "internal": 18,
      "external": 65,
      "total": 83,
      "result": "தேர்ச்சி"
    },
    {
      "code": "24XX002",
      "name": "Subject 2 Name in Tamil",
      "internal": 20,
      "external": 72,
      "total": 92,
      "result": "தேர்ச்சி"
    },
    {
      "code": "24XX003",
      "name": "Subject 3 Name in Tamil",
      "internal": 19,
      "external": 68,
      "total": 87,
      "result": "தேர்ச்சி"
    },
    {
      "code": "24XX004",
      "name": "Subject 4 Name in Tamil",
      "internal": 17,
      "external": 70,
      "total": 87,
      "result": "தேர்ச்சி"
    },
    {
      "code": "24XX005",
      "name": "Subject 5 Name in Tamil",
      "internal": 19,
      "external": 75,
      "total": 94,
      "result": "தேர்ச்சி"
    },
    {
      "code": "24XX006",
      "name": "Subject 6 Name in Tamil",
      "internal": 20,
      "external": 78,
      "total": 98,
      "result": "தேர்ச்சி"
    }
  ],
  "overallResult": "தேர்ச்சி"
}
```

---

## Field Guide

### பதிவு எண் (Register Number)
- **Format:** E24XX000
- **Example:** E24AI001, E24CS001, E24EC001
- **Must be unique** for each student

### மாணவர் பெயர் (Student Name)
- **Format:** Tamil text
- **Example:** ராஜேஷ் குமார், பிரியா சங்கர்
- Can include English if needed

### பாடப்பிரிவு (Department)
- **Format:** Tamil text
- **Examples:**
  - செயற்கை நுண்ணறிவு மற்றும் தரவு அறிவியல் (AI & Data Science)
  - கணினி அறிவியல் மற்றும் பொறியியல் (Computer Science)
  - மின்னணு மற்றும் தொடர்பாடல் பொறியியல் (ECE)

### செமஸ்டர் (Semester)
- **Format:** Roman numerals
- **Examples:** I, II, III, IV, V, VI, VII, VIII

### பாடங்கள் (Subjects Array)

Each subject object has:

#### code (Subject Code)
- **Format:** 24XX000
- **Example:** 24AI401, 24CS601
- Unique identifier for the subject

#### name (Subject Name)
- **Format:** Tamil text
- **Example:** இயந்திர கற்றல், ஆழ்ந்த கற்றல்
- Full name of the subject

#### internal (Internal Marks)
- **Type:** Number
- **Range:** 0 to 20
- Internal assessment marks

#### external (External Marks)
- **Type:** Number
- **Range:** 0 to 80
- External examination marks

#### total (Total Marks)
- **Type:** Number
- **Range:** 0 to 100
- **Formula:** internal + external

#### result (Subject Result)
- **Values:** "தேர்ச்சி" or "தோல்வி"
- **தேர்ச்சி** = Pass (total >= 50)
- **தோல்வி** = Fail (total < 50)

### overallResult (Overall Result)
- **Values:** "தேர்ச்சி" or "தோல்வி"
- **தேர்ச்சி** = All subjects passed
- **தோல்வி** = At least one subject failed

---

## Example: Pass Student

```json
{
  "பதிவு எண்": "E24AI999",
  "மாணவர் பெயர்": "முருகன் குமார்",
  "பாடப்பிரிவு": "செயற்கை நுண்ணறிவு மற்றும் தரவு அறிவியல்",
  "செமஸ்டர்": "IV",
  "பாடங்கள்": [
    {
      "code": "24AI401",
      "name": "இயந்திர கற்றல்",
      "internal": 20,
      "external": 80,
      "total": 100,
      "result": "தேர்ச்சி"
    },
    {
      "code": "24AI402",
      "name": "ஆழ்ந்த கற்றல்",
      "internal": 19,
      "external": 75,
      "total": 94,
      "result": "தேர்ச்சி"
    }
  ],
  "overallResult": "தேர்ச்சி"
}
```

---

## Example: Fail Student

```json
{
  "பதிவு எண்": "E24AI888",
  "மாணவர் பெயர்": "கார்த்திக் ராஜ்",
  "பாடப்பிரிவு": "செயற்கை நுண்ணறிவு மற்றும் தரவு அறிவியல்",
  "செமஸ்டர்": "IV",
  "பாடங்கள்": [
    {
      "code": "24AI401",
      "name": "இயந்திர கற்றல்",
      "internal": 15,
      "external": 55,
      "total": 70,
      "result": "தேர்ச்சி"
    },
    {
      "code": "24AI402",
      "name": "ஆழ்ந்த கற்றல்",
      "internal": 12,
      "external": 30,
      "total": 42,
      "result": "தோல்வி"
    }
  ],
  "overallResult": "தோல்வி"
}
```

---

## Common Department Names in Tamil

| English | Tamil |
|---------|-------|
| AI & Data Science | செயற்கை நுண்ணறிவு மற்றும் தரவு அறிவியல் |
| Computer Science | கணினி அறிவியல் மற்றும் பொறியியல் |
| Electronics & Communication | மின்னணு மற்றும் தொடர்பாடல் பொறியியல் |
| Mechanical Engineering | இயந்திர பொறியியல் |
| Civil Engineering | சிவில் பொறியியல் |
| Electrical Engineering | மின் பொறியியல் |
| Information Technology | தகவல் தொழில்நுட்பம் |

---

## Common Subject Names in Tamil

| English | Tamil |
|---------|-------|
| Machine Learning | இயந்திர கற்றல் |
| Deep Learning | ஆழ்ந்த கற்றல் |
| Natural Language Processing | இயற்கை மொழி செயலாக்கம் |
| Computer Vision | கணினி பார்வை |
| Data Mining | தரவு சுரங்கம் |
| Database Management | தரவுத்தள மேலாண்மை |
| Software Engineering | மென்பொருள் பொறியியல் |
| Web Technologies | வலை தொழில்நுட்பங்கள் |
| Operating Systems | இயக்க முறைமைகள் |
| Computer Networks | கணினி வலையமைப்புகள் |

---

## Step-by-Step: Adding a Student

### Step 1: Open the JSON file
```bash
Open: src/data/studentsData.json
```

### Step 2: Find the closing bracket
Look for the last `]` in the file

### Step 3: Add a comma
Before the `]`, add a comma after the last student object

### Step 4: Paste the template
Copy the template from above

### Step 5: Modify the details
- Change register number
- Change student name
- Change department
- Change semester
- Modify subjects (add/remove as needed)
- Update marks
- Set result based on marks
- Set overall result

### Step 6: Save the file

### Step 7: Refresh browser
The new student will appear in search

---

## Validation Rules

✅ **Register Number:** Must be unique  
✅ **Internal Marks:** 0-20  
✅ **External Marks:** 0-80  
✅ **Total Marks:** internal + external (0-100)  
✅ **Result:** "தேர்ச்சி" if total >= 50, else "தோல்வி"  
✅ **Overall Result:** "தேர்ச்சி" if all subjects pass, else "தோல்வி"  

---

## Common Mistakes to Avoid

❌ **Missing comma** between student objects  
❌ **Duplicate register numbers**  
❌ **Total not matching** internal + external  
❌ **Wrong result** (தேர்ச்சி when marks < 50)  
❌ **Missing quotes** around Tamil text  
❌ **Incorrect JSON syntax** (missing brackets, braces)  

---

## Testing Your Addition

1. Save the JSON file
2. Refresh browser (F5)
3. Search for the new register number
4. Verify all details display correctly
5. Check color coding (green/red)

---

## Need Help?

If you encounter errors:
1. Use a JSON validator: https://jsonlint.com/
2. Check for missing commas or brackets
3. Ensure all quotes are properly closed
4. Verify Tamil text is properly encoded (UTF-8)

---

**Happy Data Entry! 📝**
