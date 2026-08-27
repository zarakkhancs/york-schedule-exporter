# 🎓📅 York REM Schedule Exporter 

A fast, lightweight, and user-friendly web utility that instantly converts York University course details from the REM (Registration and Enrolment Module) portal into a standard calendar file (`.ics`). 

Compatible with Google Calendar, Apple Calendar, Microsoft Outlook, and more.

## 🚀 Live Demo
Check out the live application here: [york-schedule-exporter.vercel.app](http://york-schedule-exporter.vercel.app/)]
---

## ✨ Features
* **Zero-Setup Parsing:** Automatically processes complex course blocks, lecture sections, labs, tutorials, days, times, durations, and room numbers.
* **Error-Resilient:** Built-in sanitization to handle trailing whitespaces, empty lines, and copy-paste quirks seamlessly.
* **Cross-Platform Compatibility:** Generates a universal `.ics` file that imports smoothly into major calendar apps.
* **Modern Tech Stack:** Built with Next.js, React, and Tailwind CSS.
* **Real-time Analytics:** Tracks live usage metrics via Vercel Analytics.

---

## 🛠️ How to Use It
1. Log in to the [York REM Portal](https://registrar.yorku.ca/enrol/visiting/enrolment).
2. Select your academic session and click **Continue**.
3. Click on **Course Details**.
4. Highlight and copy **only** your course list.
5. Paste the text into the web app box and click **Generate Calendar (.ics)**.

### 📱 Apple / iPhone Import Tip
If tapping the downloaded file doesn't automatically open it in Apple Calendar:
1. Open your **Files** app.
2. Open your **Calendar** app side-by-side using split-screen or app switcher.
3. Press and hold the `.ics` file, then drag and drop it directly into your calendar view. *(Check out [this video guide](https://www.youtube.com/watch?v=xEaamiZDWuo) for a visual walkthrough!)*

---

## 💻 Tech Stack
* **Frontend & Framework:** Next.js (App Router), React, TypeScript
* **Styling:** Tailwind CSS
* **Hosting & Analytics:** Vercel, Vercel Analytics

---

## 👨‍💻 Author
Built by [Zarak Khan](https://github.com/zarakkhancs).  
Inspired by James Liang & Viktor Stanchev.
