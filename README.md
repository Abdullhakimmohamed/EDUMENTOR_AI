# EduMentor AI
### An AI-powered learning app for young children

**EduMentor AI** is an Android educational mobile app built with **Expo / React Native** and **Supabase**. It helps young children learn through lessons, games, stories, and an **Ask Mentor** chat (text + voice), while parents monitor progress in a protected dashboard.

> Academic defence project — Learn, Play & Grow.


## Features at a glance

| Feature | What it does |
|---|---|
| Learning modules | Alphabet, Numbers, Colours, Shapes, Animals, Words |
| Practice extras | Quizzes, letter/number tracing, animal match-sound |
| Educational games | Find Letter, Count Objects, Find Colour, Match Shape, Guess Animal, Mini Shopkeeper, Feed the Dolphin |
| Ask Mentor | Online help via **Google Gemini** (Supabase Edge Function); **offline helper** when the network/AI is unavailable |
| Stories | Short interactive stories with a simple comprehension check |
| Rewards | Points, streaks, and badges |
| Parent dashboard | Progress, scores, activity, and learning recommendations (password re-check before entry) |
| Admin panel | Platform stats for accounts listed in `admin_users` |
| Auth & data | Supabase Authentication + PostgreSQL with Row Level Security (RLS) |

---

## Screenshots

### Who's Playing
The child selection interface allows users to access their learning profiles.
<img width="250" alt="whose playing" src="https://github.com/user-attachments/assets/ef7a0441-79e9-48af-bafa-e04a5c7e93b9" />

### Home
The main interface provides access to the application's learning activities and features.
<img width="250" alt="home screen" src="https://github.com/user-attachments/assets/88e7fc18-3574-451e-9995-1956d06094c6" />

### Learning Modules
Children can explore different educational topics, including letters, numbers, colours, shapes, animals, and words.
<img width="250" alt="learning modules" src="https://github.com/user-attachments/assets/a2a207cb-b8d5-4ebc-9691-6b88e0c7085d" />

### Learning Games
Interactive games help children practise and improve their learning skills through play.
<img width="250" alt="GAMESjpeg" src="https://github.com/user-attachments/assets/c4f34787-c29c-43d9-99c7-b68016e08cdc" />

### Ask Mentor
The AI Mentor provides educational assistance through text and voice interactions.
<img width="250" alt="mentor" src="https://github.com/user-attachments/assets/255b2f02-8e68-48cd-a23a-4021df191e4d" />

### Rewards
Children can view their earned points, learning streaks, and achievements.
<img width="250"  alt="rewards" src="https://github.com/user-attachments/assets/65d7f33c-af56-44a7-9664-77325e877d81" />

### Child Profile
Displays the child's learning profile and related information.
<img width="200" alt="child profile" src="https://github.com/user-attachments/assets/8b9a4fc0-587d-4044-aa6d-2886aeb830e8" />

### Parent Dashboard
Provides parents with information about their child's educational progress and activities.
<img width="200" alt="parent dashboard" src="https://github.com/user-attachments/assets/842a5f25-870a-4685-9ae3-879e95d955e6" />


## Problem statement
Traditional learning methods may not always provide young children with sufficient interactive practice and engagement. Children also benefit from learning environments that encourage exploration, repetition, and independent participation.

Additionally, parents need convenient ways to understand their children's learning activities and educational progress.

EduMentor AI addresses these challenges by providing an interactive educational platform that combines structured lessons, educational games, AI-assisted mentoring, and parental progress monitoring in one application.

🎯 Project Objectives

The main objectives of EduMentor AI are:

To develop an interactive Android educational application for young children.

To provide engaging educational lessons and activities.

To integrate AI-assisted mentoring for educational support.

To develop educational games that encourage active learning.

To provide a secure parent dashboard for monitoring children's progress.

To support offline access to core educational activities.

To encourage consistent learning through rewards and achievements.


🤖 How Ask Mentor works

EduMentor AI integrates Google Gemini to provide AI-assisted educational conversations.

The system supports both online and offline mentor functionality.

Online Architecture

When an internet connection is available:

The child enters a question or uses voice input.

The application processes the user's message.

The message is sent to the Supabase Edge Function called mentor-chat.

The Edge Function communicates securely with Google Gemini.

Gemini generates an appropriate response.

The response is returned to the application.

The answer is displayed and can be spoken using expo-speech.

Offline Functionality

When the internet connection or AI service is unavailable, the application uses a local rule-based helper called offlineMentor.

This provides basic responses to supported questions without requiring an internet connection.

Important: The offline mentor is rule-based and is not a locally running large language model (LLM).

AI Communication Flow

           CHILD
             |
       Text / Voice Input
             |
        Android App
             |
       Check Network
             |
       +-----+------+
       |            |
     ONLINE       OFFLINE
       |            |
 Supabase Edge   offlineMentor
   Function       (Local Rules)
       |
   Gemini API
       |
  AI Response
       |
  Display Answer
       |
  expo-speech
       |
      CHILD

API Security: The Gemini API key (GEMINI_API_KEY) is stored as a Supabase secret and accessed through the server-side Edge Function rather than being embedded directly in the Android application.

🔐 Security and Data Management

EduMentor AI uses Supabase to manage authentication, application data, and backend operations.

Security features include:

Supabase Authentication for user accounts.

PostgreSQL database for storing application data.

Row Level Security (RLS) for controlling database access.

Server-side storage of the Gemini API key.

Password re-verification before accessing the parent dashboard.

Authorised administrator access through the admin_users table.

🏗️ System Architecture

The application follows a client-server architecture.

1. Presentation Layer

Expo and React Native.

Child learning interfaces.

Parent dashboard.

Educational games and activities.

2. Backend Layer

Supabase Authentication.

Supabase Edge Functions.

Database operations.

3. Database Layer

PostgreSQL.

Row Level Security.

User and learning progress records.

4. AI Layer

Google Gemini API.

Secure server-side communication.

Local offline mentor fallback.

🚀 Installation and Setup

Prerequisites

Before running the project, ensure you have:

Node.js installed.

npm installed.

Git installed.

Android Studio or an Android device.

A Supabase project.

A Google Gemini API key for online AI functionality.

1. Clone the Repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the Project Directory

cd EduMentor-AI

3. Install Dependencies

npm install

4. Configure Environment Variables

Create the required environment configuration using the project's setup instructions.

Configure the Supabase connection details.

Store GEMINI_API_KEY as a Supabase Edge Function secret. Do not place the private Gemini API key in publicly accessible frontend code.

5. Start the Application

npx expo start

Follow the Expo instructions to run the application on a compatible Android device or emulator.

📡 Offline and Online Capabilities

Functionality

Online

Offline

Core learning modules

Yes

Yes

Educational activities

Yes

Yes, where locally available

Ask Mentor

Gemini-powered responses

Rule-based responses

Voice input

Supported

Depends on device speech recognition availability

Text-to-speech

Supported

Depends on installed device speech services

Cloud database synchronisation

Yes

No, until connectivity returns

🎓 Academic Project Information

Project Name: EduMentor AI
Project Category: Android Mobile Application Development
Project Purpose: Academic Defence Project
Main Focus: Artificial Intelligence, Early Childhood Education, Mobile Application Development, and Educational Technology.

The project demonstrates the integration of mobile application development, backend database services, AI-assisted communication, interactive educational activities, and secure parental monitoring.

👨‍💻 Development

EduMentor AI is developed as an academic project with the goal of making early childhood education more interactive, accessible, and enjoyable.

📄 License

This project is developed for academic and educational purposes.

A formal open-source licence can be added if the project is intended for public reuse.

