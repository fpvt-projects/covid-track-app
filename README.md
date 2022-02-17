# Covid-Track-App
Covid tracking app is a project that aims to help in the collection of data from users that have used antigen test-kits at home.
Recently there has been another covid surge and many have used antigen test kits that are bought from online stores and the results of those test are not being recorded.
With this project, we are assuming that if the person is responsible enough to do a health test, he/she is also responsible enough to follow some simple instructions.

The vision is that the QR redirecting to this project will be put in the box of the test kits and a simple message instructing the user to scan the qr and submit the their results.

- axios v0.25
- chart.js-3 v2.7.7
- jwt-decode v3.1.2
- react v17.0.2
- react-icons v4.3.1
- react-responsive-carousel v3.2.22
- react-router-dom v6.2.1
- tailwindcss v3.0.16

## How to run the application
1. Fork or download the app.
2. Install dependencies, run `npm i` command.
3. Change the axios base url to http://localhost:3001 in the App.js file.
4. Start the web server using `npm start` command. The app will be served at http://localhost:3000.


## Covid-track-api
1. In order to fully run the covid-track-app you need the rails api https://github.com/fpvt-projects/covid-track-api.
2. Fork or download the api, then run `bundle install` in your api directory.
3. Run `rails db:migrate` and `rails db:seed` to setup the database.
4. Run the api server using `rails s -p 3001` to avoid conflict with the react server.

## User stories
- Users should be able to register and create an account.
- Users should be able to create, edit, and delete journal entries.
- Users should be able to edit profile information.
- Users should be able to submit test results and view submitted result logs.
- Users should be able to read news updates and view covid data counts.

## Features / Roadmap
- [x] Mobile view responsiveness.
- [x] Registration
  - Account registration with automatic sign in.
  - Can also submit test result in the registration.
- [x] Journal
  - Helps monitor the user's condition.
  - Users can create, edit, and delete journal entries.
- [x] Submit result & result log
  - Users are able to submit record of their test results.
  - Users are able to view result logs.
- [ ] Chart & Counts
  - [x] Able to view numbers of covid data.
  - [ ] Data for the graph
- [x] News updates
  - Get updated with the latest news.
  - Images, title, content, and link to the original article of the news.
- [ ] Add an admin
- [ ] Improve ui



