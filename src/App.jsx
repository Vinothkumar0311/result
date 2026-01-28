import { useState } from "react";
import "./App.css";
import studentsData from "./data/studentsData.json";
import * as XLSX from "xlsx";

function App() {
  const [registerNumber, setRegisterNumber] = useState("");
  const [studentResult, setStudentResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [uploadedData, setUploadedData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [debugColumns, setDebugColumns] = useState([]);

  // Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials for demonstration
    if (username === "admin" && password === "admin123") {
      setIsAdminLoggedIn(true);
      setShowLogin(false);
      setLoginError("");
      setUsername("");
      setPassword("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setUploadedData([]); // Optional: clear data on logout? For now let's keep it or clear it. Let's keep data but hide upload.
    // Actually, if we hide upload, we might want to keep the data so students can still check results even if admin logs out.
    // So we won't clear uploadedData.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use uploaded data if available, otherwise use default JSON data
    const dataSource = uploadedData.length > 0 ? uploadedData : studentsData;

    // Search for student by register number
    const student = dataSource.find(
      (s) =>
        s["பதிவு எண்"]?.toString().toLowerCase() ===
        registerNumber.trim().toLowerCase(),
    );

    if (student) {
      setStudentResult(student);
      setNotFound(false);
    } else {
      setStudentResult(null);
      setNotFound(true);
    }
  };

  const handleReset = () => {
    setRegisterNumber("");
    setStudentResult(null);
    setNotFound(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadStatus("📤 Uploading...");

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const workbook = XLSX.read(event.target.result, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Get headers to show in debug
        const headers = XLSX.utils.sheet_to_json(worksheet, { header: 1 })[0];
        setDebugColumns(headers || []);

        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Transform Excel data to match our JSON structure
        const transformedData = transformExcelData(jsonData);
        setUploadedData(transformedData);
        setUploadStatus(
          `✅ Successfully loaded ${transformedData.length} student records!`,
        );

        // Clear status after 5 seconds
        setTimeout(() => setUploadStatus(""), 5000);

        console.log("Uploaded data:", transformedData);
      } catch (error) {
        console.error("Error reading Excel file:", error);
        setUploadStatus(
          "❌ Error reading Excel file. Please check the format.",
        );
        setTimeout(() => setUploadStatus(""), 5000);
      }
    };
    reader.readAsBinaryString(file);
  };

  const formatExcelDate = (value) => {
    if (!value) return "";

    // If already string (eg: 12-05-2003)
    if (typeof value === "string") return value;

    // Excel date number
    if (typeof value === "number") {
      const date = XLSX.SSF.parse_date_code(value);
      if (!date) return "";
      return `${String(date.d).padStart(2, "0")}-${String(date.m).padStart(2, "0")}-${date.y}`;
    }

    return "";
  };

  const formatNumber = (value) => {
    if (value === "-" || value === "" || value === null || value === "N/A") return value; // Handle N/A
    if (isNaN(value)) return value;
    return Number(value).toFixed(2);
  };

  const transformExcelData = (excelData) => {
    return excelData.map((row) => {
      // Helper function to find value by multiple possible keys (case insensitive)
      const getValue = (keys) => {
        const rowKeys = Object.keys(row);
        for (const key of keys) {
          // Exact match
          if (row[key] !== undefined) return row[key];
          // Case insensitive match
          // Also handle keys containing the search term (partial match for long headers)
          const foundKey = rowKeys.find(
            (k) =>
              k.toLowerCase().trim() === key.toLowerCase().trim() ||
              k.toLowerCase().includes(key.toLowerCase()),
          );
          if (foundKey && row[foundKey] !== undefined) return row[foundKey];
        }
        return "N/A";
      };

      // Extract subject marks based on the specific columns in the screenshot
      const subjects = [];

      // Subject 1: அடையாளப்படு மதிப்பெண் / அகமதிப்பீடு
      subjects.push({
        பிரிவு: "அடையாளப்படு மதிப்பெண்",
        "பட்டய வகுப்பு": 10,
        "சான்றிதழ் வகுப்பு": 20,
        "பெற்ற மதிப்பெண்":
          getValue([
            "அகமதிப்பீடு மதிப்பெண் ( 10 )",
            "அகமதிப்பீடு மதிப்பெண்",
            "Subject1_Obtained",
          ]) || "N/A",
      });

      // Subject 2: வழுவகையிற்று / வருகைப்பதிவு (Fixed spelling and added exact match)
      subjects.push({
        பிரிவு: "வழுவகையிற்று மதிப்பெண்",
        "பட்டய வகுப்பு": 10,
        "சான்றிதழ் வகுப்பு": 10,
        "பெற்ற மதிப்பெண்":
          getValue([
            "வருகைப்பதிவு மதிப்பெண் ( 10 )",
            "வருகைப்பதிவு மதிப்பெண்",
            "வழுகைப்பதிவு மதிப்பெண்",
            "Subject2_Obtained",
          ]) || "N/A",
      });

      // Subject 3: செய்முறைத் தேர்வு
      subjects.push({
        பிரிவு: "செய்முறைத் தேர்வு மதிப்பெண்",
        "பட்டய வகுப்பு": 10,
        "சான்றிதழ் வகுப்பு": 20,
        "பெற்ற மதிப்பெண்":
          getValue([
            "செய்முறைத் தேர்வு ( 10 )",
            "செய்முறைத் தேர்வு",
            "Subject3_Obtained",
          ]) || "N/A",
      });

      // Subject 4: களப்பணி
      subjects.push({
        பிரிவு: "களப்பணி மதிப்பெண்",
        "பட்டய வகுப்பு": 10,
        "சான்றிதழ் வகுப்பு": "-",
        "பெற்ற மதிப்பெண்":
          getValue(["களப்பணி மதிப்பெண்", "Subject4_Obtained"]) || "N/A",
      });

      // Subject 5: ஆய்வேடு
      subjects.push({
        பிரிவு: "ஆய்வேடு மதிப்பெண்",
        "பட்டய வகுப்பு": 10,
        "சான்றிதழ் வகுப்பு": "-",
        "பெற்ற மதிப்பெண்":
          getValue(["ஆய்வேடு மதிப்பெண்", "Subject5_Obtained"]) || "N/A",
      });

      // Subject 6: ஒருங்கிணைந்த அடையாளப்படு / அகமதிப்பீட்டு
      subjects.push({
        பிரிவு: "ஒருங்கிணைந்த அடையாளப்படு மதிப்பெண்",
        "பட்டய வகுப்பு": 50,
        "சான்றிதழ் வகுப்பு": 50,
        "பெற்ற மதிப்பெண்":
          getValue([
            "ஒருங்கிணைந்த அகமதிப்பீட்டு மதிப்பெண் ( 50 )",
            "ஒருங்கிணைந்த அகமதிப்பீட்டு மதிப்பெண்",
            "Subject6_Obtained",
          ]) || "N/A",
      });

      // Subject 7: இறுதித் தேர்வு
      subjects.push({
        பிரிவு: "இறுதித் தேர்வு",
        "பட்டய வகுப்பு": 50,
        "சான்றிதழ் வகுப்பு": 50,
        "பெற்ற மதிப்பெண்":
          getValue([
            "இறுதித் தேர்வு (50)",
            "இறுதித் தேர்வு",
            "Subject7_Obtained",
          ]) || "N/A",
      });

      // Subject 8: ஒருங்கிணைந்த மொத்த மதிப்பெண்
      subjects.push({
        பிரிவு: "ஒருங்கிணைந்த மொத்த மதிப்பெண்",
        "பட்டய வகுப்பு": 100,
        "சான்றிதழ் வகுப்பு": 100,
        "பெற்ற மதிப்பெண்":
          getValue([
            "ஒருங்கிணைந்த மொத்த மதிப்பெண் (100)",
            "ஒருங்கிணைந்த மொத்த மதிப்பெண்",
            "Subject8_Obtained",
          ]) || "N/A",
      });

      return {
        "பதிவு எண்": getValue(["பதிவு எண்", "Register Number"]),
        "விண்ணப்ப எண்": getValue([
          "விண்ணப்ப எண் 2",
          "விண்ணப்ப எண்",
          "App",
          "Application Number",
        ]),
        பெயர்: getValue(["Name in English", "பெயர்", "Student Name"]), // Prioritize English name as per screenshot
        // "பிறந்த தேதி": getValue(['DoB ( DD-MM-YYYY)', 'Date of Birth', 'பிறந்த தேதி']),
        "பிறந்த தேதி": formatExcelDate(
          getValue([
            "DoB ( DD-MM-YYYY)",
            "DOB ( DD-MM-YYYY)",
            "DOB",
            "DoB",
            "Date of Birth",
            "பிறந்த தேதி",
          ]),
        ),

        பாடம்: getValue(["பாடக்குறியீடு", "Course Code", "பாடம்"]),
        பட்டப்படிப்பு:
          getValue(["Type of Course in Tamil", "Degree", "பட்டப்படிப்பு"]) ||
          "N/A",
        கந்தபுராணம்:
          getValue(["பாடத்தின் பெயர் ( Tamil)", "Subject", "கந்தபுராணம்"]) ||
          "N/A", // Using 'பாடத்தின் பெயர் ( Tamil)'
        courseNameEnglish:
          getValue(["Course Name in English", "courseNameEnglish"]) || "",
        பாடங்கள்: subjects,
        "தேர்ச்சி நிலை":
          getValue(["Status In Eng", "தேர்ச்சி நிலை"]) === "Pass"
            ? "தேர்ச்சி"
            : getValue(["தேர்ச்சி நிலை"]) || "N/A", // Map English status to Tamil if needed, or take raw. Screenshot shows "Status In Eng" and "தேர்ச்சி நிலை"
        தேர்ச்சி:
          getValue(["Pass status in eng", "Result", "தேர்ச்சி"]) || "N/A",
        "நன்றி நன்று":
          getValue(["நடத்தை மற்றும் பண்பு", "Grade", "நன்றி நன்று"]) || "N/A", // 'நடத்தை மற்றும் பண்பு' seems to be grade/conduct? Or take raw Grade. Screenshot shows "நடத்தை மற்றும் பண்பு" might be it.
      };
    });
  };

  return (
    <div className="app-container">
      <div className="header">
        <div style={{ position: "absolute", top: "20px", right: "20px" }}>
          {!isAdminLoggedIn ? (
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="btn-reset"
              style={{ fontSize: "0.9rem", padding: "8px 16px" }}
            >
              🔒 Staff Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="btn-reset"
              style={{
                fontSize: "0.9rem",
                padding: "8px 16px",
                background: "#f8d7da",
                color: "#721c24",
                borderColor: "#f5c6cb",
              }}
            >
              🔓 Logout
            </button>
          )}
        </div>
        <h1>மாணவர் தேர்வு முடிவுகள்</h1>
        <p className="subtitle">Student Examination Results</p>
      </div>

      {showLogin && !isAdminLoggedIn && (
        <div
          className="search-container"
          style={{ maxWidth: "500px", margin: "0 auto 30px" }}
        >
          <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
            Staff Login
          </h3>
          <form onSubmit={handleLogin} className="search-form">
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            {loginError && (
              <p style={{ color: "red", textAlign: "center" }}>{loginError}</p>
            )}
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
        </div>
      )}

      {/* Excel Upload Section - Only visible to Admin */}
      {isAdminLoggedIn && (
        <div className="upload-container">
          <div className="upload-header">
            <h3>📁 Excel File Upload (Excel கோப்பு பதிவேற்றம்)</h3>
            <p className="upload-subtitle">
              Upload your student results Excel file to view results
            </p>
          </div>
          <div className="upload-content">
            <label htmlFor="excelUpload" className="upload-label">
              <span className="upload-icon">📤</span>
              <span className="upload-text">
                Choose Excel File (.xlsx, .xls)
              </span>
            </label>
            <input
              type="file"
              id="excelUpload"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              className="file-input"
            />
            {uploadStatus && (
              <div
                className={`upload-status ${uploadStatus.includes("✅") ? "success" : uploadStatus.includes("❌") ? "error" : "loading"}`}
              >
                {uploadStatus}
              </div>
            )}
            {uploadedData.length > 0 && (
              <div className="upload-info">
                <p>
                  📊 <strong>{uploadedData.length}</strong> student records
                  loaded from Excel
                </p>
                <p className="upload-hint">
                  You can now search for students using their register numbers
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="search-container">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="input-group">
            <label htmlFor="registerNumber">பதிவு எண் (Register Number):</label>
            <input
              type="text"
              id="registerNumber"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              placeholder="உதாரணம்: 250206"
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-submit">
              தேடு (Search)
            </button>
            <button type="button" onClick={handleReset} className="btn-reset">
              மீட்டமை (Reset)
            </button>
          </div>
        </form>
      </div>

      {notFound && (
        <div className="not-found">
          <p>❌ முடிவு கிடைக்கவில்லை (Result not found)</p>
          <p className="hint">தயவுசெய்து சரியான பதிவு எண்ணை உள்ளிடவும்</p>
        </div>
      )}

      {studentResult && (
        <div className="result-container">


          {/* Student Information Section */}
          <div className="student-info-grid">
            <div className="info-section yellow-section">
              <div className="section-header yellow-header">பாடம்</div>
              <div className="info-content">
                <div className="info-value">{studentResult["பாடம்"]}</div>
                <div className="info-value">
                  {studentResult["பட்டப்படிப்பு"]}
                </div>
                <div className="info-value">{studentResult["கந்தபுராணம்"]}</div>
                <div className="info-value-english">
                  {studentResult["courseNameEnglish"]}
                </div>
              </div>
            </div>

            <div className="info-section yellow-section">
              <div className="section-header yellow-header">
                தேர்வர் விவரங்கள்
              </div>
              <div className="info-content">
                <div className="info-row-inline">
                  <span className="label">விண்ணப்ப எண்:</span>
                  <span className="value">{studentResult["விண்ணப்ப எண்"]}</span>
                </div>
                <div className="info-row-inline">
                  <span className="label">பதிவு எண்:</span>
                  <span className="value">{studentResult["பதிவு எண்"]}</span>
                </div>
                <div className="info-row-inline">
                  <span className="label">பெயர்:</span>
                  <span className="value">{studentResult["பெயர்"]}</span>
                </div>
                <div className="info-row-inline">
                  <span className="label">பிறந்த தேதி:</span>
                  <span className="value">{studentResult["பிறந்த தேதி"]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Marks Table */}
          <div className="table-container">
            <table className="result-table">
              <thead>
                <tr>
                  <th rowSpan="2" className="teal-header">
                    பிரிவு
                  </th>
                  <th colSpan="2" className="teal-header">
                    அதிகபட்ச மதிப்பெண்
                  </th>
                  <th rowSpan="2" className="teal-header">
                    பெற்ற
                    <br />
                    மதிப்பெண்
                  </th>
                </tr>
                <tr>
                  <th className="teal-header">பட்டய வகுப்பு</th>
                  <th className="teal-header">சான்றிதழ் வகுப்பு</th>
                </tr>
              </thead>
              <tbody>
                {studentResult["பாடங்கள்"].map((subject, index) => (
                  <tr key={index}>
                    <td className="subject-name">{subject["பிரிவு"]}</td>
                    <td className="center">{subject["பட்டய வகுப்பு"]}</td>
                    <td className="center">{subject["சான்றிதழ் வகுப்பு"]}</td>
                    {/* <td className="center bold">
                      {subject["பெற்ற மதிப்பெண்"]}
                    </td> */}
                    <td className="center bold">
                      {formatNumber(subject["பெற்ற மதிப்பெண்"])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Result Section */}
          <div className="result-section">
            <div className="result-box">
              <div className="result-label">தேர்ச்சி நிலை</div>
              <div className="result-status">
                <div className="tamil-result">
                  {studentResult["தேர்ச்சி நிலை"]}
                </div>
                <div className="english-result">
                  {studentResult["தேர்ச்சி"]}
                </div>
              </div>
            </div>
            <div className="grade-box">
              <div className="grade-label">நன்றி நன்று</div>
              <div className="grade-value">{studentResult["நன்றி நன்று"]}</div>
            </div>
          </div>
        </div>
      )}

      {!studentResult && !notFound && (
        <div className="welcome-message">
          <div className="welcome-icon">📋</div>
          <h3>வரவேற்கிறோம்!</h3>
          <p>
            உங்கள் தேர்வு முடிவுகளை பார்க்க மேலே உள்ள பதிவு எண்ணை உள்ளிடவும்
          </p>
          <p className="sample-hint">
            மாதிரி பதிவு எண்: 250206, 250207, 250208
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
