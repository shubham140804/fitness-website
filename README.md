# 🏋️ APEXATHLETE

### Fitness, Workout & Wellness Platform

ApexAthlete is a modern and responsive fitness and wellness website designed to help users improve their fitness through workout classes, diet plans, BMI analysis, fitness resources, and user authentication.

The project combines **HTML5, CSS3, JavaScript, Firebase Authentication, and YouTube video integration** to create an interactive fitness platform.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Website Sections](#-website-sections)
- [Workout Classes](#-workout-classes)
- [Diet Plans](#-diet-plans)
- [BMI Calculator](#-bmi-calculator)
- [User Authentication](#-user-authentication)
- [YouTube Integration](#-youtube-integration)
- [Dark Mode](#-dark-mode)
- [Responsive Design](#-responsive-design)
- [UI and Animations](#-ui-and-animations)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [How to Run the Project](#-how-to-run-the-project)
- [Firebase Setup](#-firebase-setup)
- [How the BMI Calculator Works](#-how-the-bmi-calculator-works)
- [How the Video System Works](#-how-the-video-system-works)
- [Future Enhancements](#-future-enhancements)
- [Learning Outcomes](#-learning-outcomes)
- [Project Screens](#-project-screens)
- [Contributors](#-contributors)
- [License](#-license)
---

# 📖 About the Project

ApexAthlete is a fitness-focused web application developed to provide users with an easy-to-use platform for accessing fitness and wellness resources.

The website allows users to explore different workout classes, view workout videos, check BMI, explore personalized diet plans, and access fitness-related information.

The project was developed with a focus on:

- Modern user interface design
- Responsive web development
- Interactive JavaScript functionality
- API integration
- Cloud-based authentication
- User-friendly navigation
- Health and fitness awareness

The goal of ApexAthlete is to provide users with a centralized platform where they can access basic fitness guidance and tools without needing multiple websites or applications.

---

# 🎯 Project Objectives

The main objectives of ApexAthlete are:

1. Develop a modern fitness and wellness website.
2. Provide users with different workout classes.
3. Integrate workout videos into the website.
4. Provide basic personalized diet information.
5. Allow users to calculate their BMI.
6. Implement secure user authentication.
7. Create a responsive interface for different devices.
8. Provide an interactive and user-friendly experience.
9. Demonstrate practical knowledge of frontend technologies.
10. Integrate third-party services and APIs into a web application.

---

# ✨ Features

## 🏠 1. Modern Homepage

The homepage provides users with an introduction to ApexAthlete.

It includes:

- Fitness-focused hero section
- Navigation bar
- Call-to-action buttons
- Fitness imagery
- Smooth navigation
- Responsive layout

---

## 💪 2. Fitness Services

The Services section provides information about different areas of fitness.

### Available Services

- 💪 Fitness Training
- 🧘 Yoga
- 🧠 Mental Wellness
- ⚔ Personal Defence

Each service provides a short description explaining its purpose and benefits.

---

# 🏋️ 3. Workout Classes

The Classes section allows users to explore different types of workouts.

Available classes include:

- Cardio Strength
- Weight Training
- Yoga for Flexibility
- HIIT
- Boxing Training
- Pilates Core Workout

Each class is interactive.

When the user selects a class, the corresponding workout video is displayed inside a video modal.

---

# ▶️ 4. Workout Video Integration

ApexAthlete integrates YouTube workout videos into the website.

Instead of redirecting users to another page, videos are displayed using an embedded YouTube player.

### Process

```text
User selects a class
        ↓
JavaScript identifies the class
        ↓
Corresponding YouTube video URL is selected
        ↓
Video URL is assigned to iframe
        ↓
Video modal opens
        ↓
User watches the workout
```

---

# 🥗 Diet Plans

ApexAthlete provides basic diet guidance based on different fitness goals.

### Available Plans

- Weight Loss
- Muscle Gain
- Balanced Maintenance

Each plan provides examples of suitable foods along with general healthy eating tips.

> Note: The diet information provided by ApexAthlete is for general educational purposes and is not a substitute for professional medical or nutritional advice.

---

# 🧮 BMI Calculator

ApexAthlete includes an interactive BMI calculator.

Users enter:

- Height in centimeters
- Weight in kilograms

The application calculates BMI using:

BMI = Weight (kg) / Height² (m²)

The result is then classified into different categories such as:

- Underweight
- Normal Weight
- Overweight
- Obese

The calculation is performed using JavaScript without refreshing the page.

---

# 🔐 User Authentication

ApexAthlete uses Firebase Authentication to provide user account functionality.

Users can:

- Register an account
- Log in
- Reset their password
- Access authentication-protected functionality

Firebase handles authentication rather than storing user passwords directly in the frontend.

---

# 🛠️ Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Libraries & Services

- Firebase Authentication
- YouTube
- Remix Icon
- ScrollReveal
- Google Fonts

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Chrome Developer Tools

---

# 🧭 Website Sections

ApexAthlete is organized into the following main sections, accessible from the navigation bar:

| Section | Description |
|---|---|
| **Home** | Landing hero section with a fitness-focused introduction and call-to-action buttons |
| **About** | Overview of ApexAthlete's mission and what the platform offers |
| **Services** | Fitness Training, Yoga, Mental Wellness, and Personal Defence overviews |
| **Classes** | Interactive workout classes with embedded YouTube videos |
| **Diet Plans** | Weight Loss, Muscle Gain, and Balanced Maintenance guidance |
| **BMI Calculator** | Height/weight input with instant BMI result and category |
| **Login / Register** | Firebase-powered authentication pages |
| **Contact / Footer** | Contact details and closing navigation links |

---

# 🌙 Dark Mode

ApexAthlete supports a dark mode viewing option so users can switch between light and dark themes based on preference.

- A toggle button switches the theme instantly using JavaScript.
- Theme styling is handled through CSS variables/classes rather than duplicate stylesheets.
- The selected theme applies across all sections of the site.

> If dark mode isn't implemented yet in your current codebase, this section can serve as a spec for adding it — toggle a `dark-mode` class on `<body>` and swap CSS custom properties accordingly.

---

# 📱 Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive layouts are implemented using:

- CSS Grid
- Flexbox
- Media Queries
- Relative units
- Responsive images

---

# 🎨 UI and Animations

ApexAthlete uses lightweight animation and icon libraries to keep the interface polished without harming performance.

- **ScrollReveal** — fades and slides sections into view as the user scrolls
- **Remix Icon** — consistent, scalable icon set used across buttons and cards
- **Google Fonts** — custom typography for headings and body text
- **CSS transitions** — hover effects on buttons, cards, and navigation links
- **Modal animations** — smooth open/close behavior for the video player modal

---

# 📂 Project Structure

```text
ApexAthlete/
│
├── assets/
│   ├── header.png
│   ├── about.png
│   ├── service.png
│   ├── facility.jpg
│   ├── logodark.jpg
│   ├── weight loss.jpg
│   ├── gain.webp
│   ├── balanced diet.png
│   ├── bmi-chart.jpg.jpg
│   └──..... other images
│
├── index.html
├── login.html
├── register.html
├── forgot-password.html
├── styles.css
├── main.js
└── README.md
```

---

# ▶️ How to Run the Project

ApexAthlete is a static frontend project, so no build tools are required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/ApexAthlete.git
   ```
2. **Navigate into the project folder**
   ```bash
   cd ApexAthlete
   ```
3. **Open the project**
   - Simplest: open `index.html` directly in your browser, or
   - Recommended: use a local server (e.g. VS Code's **Live Server** extension) to avoid issues with Firebase and relative asset paths.
4. **Set up Firebase** (see [Firebase Setup](#-firebase-setup) below) before testing login/register.

---

# 🔥 Firebase Setup

ApexAthlete uses **Firebase Authentication** for user registration, login, and password reset functionality.

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a Firebase project.
3. Add a Web App to the project.
4. Copy the Firebase configuration provided by Firebase.

### 2. Enable Email/Password Authentication

In the Firebase Console, go to:

**Build → Authentication → Sign-in method → Email/Password**

Enable the **Email/Password** provider.

### 3. Add Firebase to the Website

ApexAthlete uses Firebase through CDN scripts.

Add the Firebase SDK before the closing `</body>` tag:

```html
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"></script>
```

Then initialize Firebase using your project configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

### 4. Test Authentication

After configuring Firebase:

- Open `register.html` to create an account.
- Open `login.html` to log in.
- Open `forgot-password.html` to test password reset functionality.

> ⚠️ Do not put user passwords, private credentials, or other sensitive information in the README.
# 🧮 How the BMI Calculator Works

1. The user enters **height (cm)** and **weight (kg)** into input fields.
2. On form submission, JavaScript converts height from centimeters to meters.
3. BMI is calculated with:
   ```
   BMI = weight (kg) / (height (m) × height (m))
   ```
4. The result is rounded to one or two decimal places for display.
5. The BMI value is compared against standard ranges to assign a category:

   | BMI Range | Category |
   |---|---|
   | Below 18.5 | Underweight |
   | 18.5 – 24.9 | Normal Weight |
   | 25 – 29.9 | Overweight |
   | 30 and above | Obese |

6. The result and category are displayed on the page instantly, without a page reload.

---

# ▶️ How the Video System Works

1. Each workout class in the Classes section is linked to a specific YouTube video ID/URL stored in JavaScript (e.g. as an object or array mapping class names to video links).
2. When a user clicks a class card, an event listener captures the selection.
3. JavaScript looks up the corresponding video URL for that class.
4. The video URL is dynamically inserted into an `<iframe>`'s `src` attribute inside a modal component.
5. The modal is displayed (e.g. by toggling a CSS `display`/`active` class).
6. When the user closes the modal, the iframe `src` is cleared so the video stops playing in the background.

---

# 🚀 Future Enhancements

Planned or possible improvements for future versions of ApexAthlete:

- Personalized workout and diet recommendations based on user goals
- Progress tracking (weight, BMI history, workout streaks) tied to user accounts
- Integration with a real nutrition API for more accurate diet data
- Community/social features (sharing progress, following friends)
- Push notifications or email reminders for scheduled workouts
- Migration to a frontend framework (React/Vue) for better state management
- Backend database (Firestore) to store user-specific fitness data
- Payment integration for premium classes or plans

---

# 🎓 Learning Outcomes

Building ApexAthlete reinforced practical skills including:

- Structuring a multi-page website with clean, semantic HTML5
- Building responsive layouts with CSS Grid and Flexbox
- Writing interactive JavaScript for dynamic content (modals, calculators, theme toggles)
- Integrating third-party services (Firebase Authentication, YouTube embeds)
- Managing project structure and assets for a frontend-only application
- Debugging and testing across devices and browsers
- Writing clear technical documentation

---

# 🖼️ Project Screens

> Add screenshots of key pages here once available, for example:

- Homepage
- Services section
- Classes with video modal open
- Diet Plans section
- BMI Calculator with a sample result
- Login / Register pages

```markdown
![Homepage](assets/screenshots/homepage.png)
![BMI Calculator](assets/screenshots/bmi-calculator.png)
```

---

# 👥 Contributors

| Name | Role |
|---|---|
| [Your Name] | Developer |

> Update this table with your name and the names/roles of anyone else who contributed to the project.

---

# 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute this project with attribution.

> Replace this with your actual chosen license (MIT, Apache 2.0, GPL, etc.) and add a corresponding `LICENSE` file to the repository root if one doesn't already exist.
