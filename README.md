# EduMentor AI
### An AI-powered learning app for young children

**EduMentor AI** is an Android educational mobile app built with **Expo / React Native** and **Supabase**. It helps young children learn through lessons, games, stories, and an **Ask Mentor** chat (text + voice), while parents monitor progress in a protected dashboard.

> Academic defence project — Learn, Play & Grow.

---

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

Add real device screenshots under `assets/screenshots/` (or `docs/screenshots/`), then update the paths below.

### 1. Home screen
Child-friendly hub with modules, points, streak, and badges.

![Home Screen](assets/screenshots/home-screen.png)

### 2. Learning modules
Example: Alphabet / Numbers / Animals lesson screens.

![Learning Modules](assets/screenshots/learning-modules.png)

### 3. Learning games
Games home or one gameplay screen (e.g. Mini Shopkeeper).

![Learning Games](assets/screenshots/learning-games.png)

### 4. Ask Mentor
Chat with ONLINE/OFFLINE status, mic button, and spoken replies.

![AI Mentor](assets/screenshots/ai-mentor.png)

### 5. Parent dashboard
Lessons completed, average score, learning time, streak, recent activity.

![Parent Dashboard](assets/screenshots/parent-dashboard.png)

**Optional extras for a stronger GitHub page:** Who’s Playing, Rewards, Supabase Auth users, `child_profiles` table.

---

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
