# Full Stack Open: my course solutions

![Created](https://img.shields.io/github/created-at/Heir-of-God/fullstack-course)
![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Stars](https://img.shields.io/github/stars/Heir-of-God/fullstack-course)
![License: MIT](https://img.shields.io/github/license/Heir-of-God/fullstack-course)

## Welcome! 👋

This is my learning repo for the free [Full Stack Open](https://fullstackopen.com/) course by the University of Helsinki. It holds my solutions to the exercises and the code I wrote while following the course material, part by part. I'm a Software Engineering student, and I'm keeping it all in one place so I (and you) can see how it grows. 🌱

## 📚 About the course

[Full Stack Open](https://fullstackopen.com/) is a free, self-paced course on modern web development with JavaScript. It covers React on the front end, Node.js and Express on the back end, and how the two talk to each other. This repo covers parts 0 to 3 so far.

## 🗂️ Repository structure

| Part | Topic | What's inside |
| --- | --- | --- |
| [`part0`](part0) | Fundamentals of web apps | Sequence diagrams (Mermaid) for exercises 0.4 to 0.6 |
| [`part1`](part1) | Introduction to React | `intro-project` from the material, plus the exercises `course-information` (1.1-1.5), `unicafe` (1.6-1.11) and `anecdotes` (1.12-1.14) |
| [`part2`](part2) | Communicating with the server | `part-project` from the material, plus `course-information` (2.1-2.5), `phonebook` frontend (2.6-2.17, uses json-server) and `data-countries` (2.18-2.20, uses a countries API and a weather API) |
| [`part3`](part3) | Programming a server with Node.js and Express | `part-project` (small Express server from the material) and `phonebook-backend` (exercises 3.1-3.10: REST API, request logging, serving the built phonebook frontend from `dist`) |

Progress: exercises 0.4-0.6, 1.1-1.14, 2.1-2.20 and 3.1-3.10 are done. Later parts will be added as I get to them.

## 🛠️ Tech used

- **JavaScript** (ES modules) and **Node.js**
- **React 19** with **Vite** for the front-end projects
- **ESLint** for linting
- **Axios** for HTTP requests in the part 2 projects
- **json-server** as a mock REST backend for the part 2 phonebook
- **Express 5** for the part 3 backends, with **Morgan** (request logging) and **CORS**

## 📥 How to run

1. Give this repo a star ⭐ (it really helps and makes my day!)
2. Clone it and pick a project:
   ```bash
   git clone https://github.com/Heir-of-God/fullstack-course.git
   cd fullstack-course/part1/exercises/unicafe
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start it:
   - React/Vite projects (parts 1 and 2): `npm run dev`
   - Part 2 phonebook also needs the mock server in a second terminal: `npm run server` (json-server on port 3001)
   - Part 3 backends: `npm run dev` (or `npm start`), the server listens on port 3001 unless `PORT` is set
5. Open the address printed in the terminal.

Notes:
- The `data-countries` project reads an OpenWeather API key from `VITE_WEATHER_API_KEY`. Put your own key in a local `.env.local` file to see the weather.
- Tested: the part 2 `phonebook` builds with Vite, and the part 3 `phonebook-backend` starts and answers on `/api/persons`. The other projects use the same Vite scripts.

## 📃 License

This project is licensed under the [MIT License](LICENSE).

<p align="center">Show ❤️ By Starring This Repo💎</p>
