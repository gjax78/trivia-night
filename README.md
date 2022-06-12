# Trivia Night

## Overview

![TriviaNight](https://user-images.githubusercontent.com/88151743/173131947-2698a5d0-f3de-4099-b37c-58d50460837e.gif)

Want to host a trivia night but don't know where to start? [Trivia Night](https://trivia-night-gjax78.vercel.app/) is here! With Trivia Night a user will land on the page and see a series of trivia categories. From there the user will see a list of trivia questions for that category. They can then add and remove questions to their game page to create their own customized list of trivia questions!

### Endpoints

Trivia Night is a React.js application, consuming [The Trivia API](https://the-trivia-api.com/docs/) to source trivia questions for hosting a game night! 

Endpoints utilized by Trivia Night for the questions data included queries for category, difficulty and amount of questions to return. 

Each time the user selects a category from the home view, the button sends the category value to the fetch call to request the interpolated category query. 

### Example Endpoint

`https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=20`

### Project Management Tools

- Kanban process with [GitHub Projects](https://github.com/chalstead16/trivia-night/projects/1)

- Wireframing with [Figma](https://www.figma.com/file/9MmFzIglKzplFHHwO0E7i0/Stretch-Tech---Trivia-Night?node-id=0%3A1)

- Component Architecture
![Screen Shot 2022-06-12 at 3 25 17 PM](https://user-images.githubusercontent.com/91504411/173252285-55293a02-0c5b-40ac-8ba0-205d73ad6e24.png)

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learning Goals

- Clean and consistent React Architecture
- Implementation of Typescript
- Create a multi-page UX using Router
- User flows tested with cypress
- Project spec can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)

## Getting Started

1. Clone the repo down to your machine
2. Open the root directory and run ```npm i``` to install dependencies
3. Run ```npm start``` in the terminal to open the webpage
4. Open a second terminal tab and run ```npm run cypress``` (while localhost:3000 is still running) to access the cypress testing for this app

## Deployed Link

[Trivia Night](https://trivia-night-gjax78.vercel.app/)

## Features
- User can save questions to their game
- User can remove questions from their game
- Fully tested with Cypress

## Technologies Used
- React.js
- Typescript
- React Router
- CSS
- HTML
- Cypress
- RESTful APIs
- Figma
- GitHub Projects & Issues

## Goals
- Clean and consistent React Architecture
- Implementation of Typescript
- Create a multi-page UX using Router
- User flows tested with cypress
- Project spec can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)

### Future Additions
- Incorporate Sass
- Ability for user to add their own questions
- Sort questions by difficulty
- Play a trivia game in app

### Contributors
<table>
    <tr>
        <td> Geena Jackson: <a href="https://github.com/gjax78">GitHub</td>
        <td> Sam Mistele: <a href="https://github.com/SamusMist">GitHub</td>
        <td> Casey Halstead: <a href="https://github.com/chalstead16">GitHub</td>
        <td> Brenda Sotelo: <a href="https://github.com/BrendaSotel0">Github</td>
    </tr>
 <td><img src="https://user-images.githubusercontent.com/88151743/157297276-e9c007e9-7f50-4c62-902a-d454e50b5b3e.jpeg" alt="Geena Jackson GitHub"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/89484102?v=4g" alt="Sam Mistele GitHub"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/91504411?v=4" alt="Casey Halstead GitHub"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/89258056?v=4" alt="Brenda Sotelo GitHub"
 width="150" height="auto" /></td>
</table>
