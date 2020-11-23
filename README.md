# **T(x)**
*A front-facing scheduler for tutors to connect with clients professionally.*

<br />

### Welcome to T-of-X!
<hr>

This repository contains a tutoring scheduler developed in collaboration with [Isaac Yep](https://github.com/anthonybench) and [Michael Chang](https://github.com/michael940716). This application provides a portal for students to sign in and send booking requests to the tutor, who can sign into the opposite end of the same portal and review requests. Both tutor and student authenticate through *Google API* services to automatically add bookings to either user's google calendar.

<br />

### Table of Contents 📖
<hr>

  - [Welcome](#welcome-to-T-of-X)
  - [**Get Started**](#get-started-)
  - [Usage](#usage-)
  - [Technologies](#technologies-)
  - [Contribute](#Contribute-)
  - [Acknowledgements](#acknowledgements-)
  - [License/Stats/Author](#license-stats-author-)

<br />

### Get Started 🚀
<hr>

Our application example is hosted [here](https://t-of-x-294901.uc.r.appspot.com/), and is instanced for me (*Isaac Yep*), however this application as a product would be tailored for any tutor as a front facing scheduler/portal through which to interact with current or potential clients. Simply clone this repository, change placeholder values and items with your own, and deploy. Make sure to run `npm install` in both front end (`/t-of-x`) and back end (`/backend`) subdirectories. The front end is a *React* application, and the back end is a *Node/Express* application. For relevant api keys, you'll need to register a [Google Cloud Project](https://cloud.google.com), as well as a [MongoDB Atlas Project](https://mongodb.com) project. To Initialize the *Users* database collection with the teacher, enter the following command from the root directory after your connection string is managed:
```
$ cd backend
$ node data/instance
$ node data/testdatafill
```

To make sure your database connected properly to the back end, from `/backend` enter:
```
$ node data/diagnose
```

While debugging, you can purge the test data from your database and reset pertinant data with:
```
$ node data/reset
```

<br />

### Usage ⚙
<hr>

There are 3 views in this application, the *landing page*, *teacher dashboard*, and *student dashboard*. In the landing page, you decided to create an account as a new student, or login with your credentials as the teacher or student:

<img alt="PLACE HOLDER IMAGE" src="https://i.imgur.com/4POxj2g.png" width="200" />

After authenticaing with Google Authentication, the user is routed to their appropriate view.

For the Teacher:

<img alt="PLACE HOLDER IMAGE" src="https://i.imgur.com/4POxj2g.png" width="200" />

For the Student:

<img alt="PLACE HOLDER IMAGE" src="https://i.imgur.com/4POxj2g.png" width="200" />

From here, meeting time propositions can be sent and recieved, and a calendar view organizes your availability to make business quick, without needing to open other web-apps. This app aims to be realistic, and doesn't attempt to enforce strict times, but instead delivers contact information and availability, and allows meeting times to be confirmed and managed easily so as to not get in the way of changing times on the fly when needed.

<br />

### Technologies 🧰
<hr>

  - [MongoDB](https://docs.mongodb.com/)
  - [Express.js](https://expressjs.com/)
  - [React.js]([https:](https://reactjs.org/docs/getting-started.html))
  - [Node.js](https://nodejs.org/en/docs/)
  - [Google API](https://developers.google.com/docs/api)
  - [Google Calendar API](https://developers.google.com/calendar)
  - [Math.js](https://mathjs.org/docs/)
  - [React-Axios](https://www.npmjs.com/package/react-axios)

<br />

### Contribute 🤝
<hr>

We are not reviewing pull requests for merging at this time, but would greatly appreciate any feedback within a PR.

<br />

### Acknowledgements 💙
<hr>

A huge thanks to our instructor **Caterina Paun**, and TA **Casper Rutz** for delivering this course and empowering us to develop ***T(X)***, we learned so much from this project, are proud of what we made here, and genuinely intend to keep maintaining and imporoving this application to use personally. This application was made as a course project for the **Full Stack Web Development** course at *Portland State University*.

<br />

### License, Stats, Author 📜
<hr>

<img align="right" alt="heart" src="https://i.imgur.com/4POxj2g.png" width="200" />

<!-- badge cluster -->

![GitHub](https://img.shields.io/github/license/anthonybench/T-of-X) ![GitHub language count](https://img.shields.io/github/languages/count/anthonybench/T-of-X) ![GitHub top language](https://img.shields.io/github/languages/top/anthonybench/T-of-X) ![GitHub repo size](https://img.shields.io/github/repo-size/anthonybench/T-of-X)

React ![npm](https://img.shields.io/npm/v/react)

MongoDB ![npm](https://img.shields.io/npm/v/mongodb)

Express ![npm](https://img.shields.io/npm/v/express)

React-Axios ![npm](https://img.shields.io/npm/v/react-axios)

<!-- / -->
See [License](https://opensource.org/licenses/MIT) for the full license text.

This repository was authored by ***Isaac Yep*** as the back-end developer and documenter, and ***Michael Change*** as the front-end developer.

[Back to Table of Contents](#table-of-contents-)
