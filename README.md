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
<img width="250" alt="whose playing" src="https://github.com/user-attachments/assets/ef7a0441-79e9-48af-bafa-e04a5c7e93b9" />

### Home
<img width="250" alt="home screen" src="https://github.com/user-attachments/assets/88e7fc18-3574-451e-9995-1956d06094c6" />

### Learning Modules
<img width="250" alt="learning modules" src="https://github.com/user-attachments/assets/a2a207cb-b8d5-4ebc-9691-6b88e0c7085d" />

### Learning Games
<img width="250" alt="GAMESjpeg" src="https://github.com/user-attachments/assets/c4f34787-c29c-43d9-99c7-b68016e08cdc" />

### Ask Mentor
<img width="250" alt="mentor" src="https://github.com/user-attachments/assets/255b2f02-8e68-48cd-a23a-4021df191e4d" />

### Rewards
<img width="250"  alt="rewards" src="https://github.com/user-attachments/assets/65d7f33c-af56-44a7-9664-77325e877d81" />

### Child Profile
<img width="200" alt="child profile" src="https://github.com/user-attachments/assets/8b9a4fc0-587d-4044-aa6d-2886aeb830e8" />

### Parent Dashboard
<img width="200" alt="parent dashboard" src="https://github.com/user-attachments/assets/842a5f25-870a-4685-9ae3-879e95d955e6" />


## Problem statement

Young children often need more interactive practice than worksheets alone provide. Parents also need a simple way to see what their child practised. EduMentor AI combines child-friendly lessons and games with AI mentoring and parent progress monitoring in one Android app.

---

## Objectives

1. Build an interactive educational Android app for early learners.
2. Provide lessons and games that make practice enjoyable.
3. Integrate AI-assisted mentoring with a **server-side API key**.
4. Let parents monitor learning progress securely.
5. Keep core lessons usable offline, with an offline mentor fallback for basic questions.

---

## How Ask Mentor works

```text
Child (type or 🎤)
   → Android SpeechInput (Kotlin) / text
   → App calls Supabase Edge Function: mentor-chat
   → Gemini API (GEMINI_API_KEY stored as a Supabase secret)
   → Reply shown + spoken with expo-speech

If network/AI unavailable → local offlineMentor helper (rule-based, not a local LLM)
```
