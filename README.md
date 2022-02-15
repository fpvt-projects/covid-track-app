# Covid-Track-App
Covid-track-app project aims to help track record of covid test result by PH consumers that uses test-kits bought from online stores.

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

## Features
- Mobile view responsiveness.
- Registration
  - Account registration with automatic sign in.
  - Can also submit test result in the registration.
- Journal
  - Helps monitor the user's condition.
  - Users can create, edit, and delete journal entries.
- Submit result & result log
  - Users are able to submit record of their test results.
  - Users are able to view result logs.
- Chart & Counts
  - Able to view numbers of covid data.
- News updates
  - Get updated with the latest news.
  - Images, title, content, and link to the original article of the news.

## Dependencies
- Node
- tailwindcss
- react-router-dom v6
- Axios
- react-responsive-carousel
- react-chartjs
- react-icons

## What the app looks like
### Home (Desktop view)
![HomeIndex](https://user-images.githubusercontent.com/87056920/154110412-eadcb498-a289-4551-bd47-eadf4b826ec7.JPG)
### Journal (Mobile view)
![Journal](https://user-images.githubusercontent.com/87056920/154109044-cac3aa72-9d58-4d79-8078-094a849e0a87.JPG)
### ResultLog (Mobile view)
![ResultLog](https://user-images.githubusercontent.com/87056920/154109881-29b0f5dd-a12e-4557-9a0b-7d6de0413041.JPG)
