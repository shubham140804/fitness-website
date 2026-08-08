# fitness-website
# 🏋️ APEXATHLETE

### Fitness, Workout & Wellness Platform

ApexAthlete is a modern and responsive fitness and wellness website designed to help users improve their fitness through workout classes, diet plans, BMI analysis, fitness resources, and user authentication.

The project combines **HTML5, CSS3, JavaScript, Firebase Authentication, and YouTube video integration** to create an interactive fitness platform.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Website Sections](#-website-sections)
- [Workout Classes](#-workout-classes)
- [Diet Plans](#-diet-plans)
- [BMI Calculator](#-bmi-calculator)
- [User Authentication](#-user-authentication)
- [YouTube Integration](#-youtube-integration)
- [Dark Mode](#-dark-mode)
- [Responsive Design](#-responsive-design)
- [UI and Animations](#-ui-and-animations)
- [Project Structure](#-project-structure)
- [How to Run](#-how-to-run-the-project)
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
User watches the workout# 🥗 Diet Plans

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

# 📂 Project Structure

```text
ApexAthlete/
│
├── assets/
│   ├── header.png
│   ├── about.png
│   ├── service.png
│   ├── facility.jpg
│   ├── logo.png
│   ├── diet images
│   └── other assets
│
├── index.html
├── login.html
├── register.html
├── forgot-password.html
├── styles.css
├── main.js
└── README.md
