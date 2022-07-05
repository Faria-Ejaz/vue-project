# Introduction

Welcome to the Intruder frontend coding test!

We recommend that the test should take 4-5 hours. It would be great if you could
let us know how much time you spent on the test. There is no right or wrong amount of time,
this info will simply help us with context when reviewing the results.

Your task is to implement a page listing security issues found on a user's targets. 
The design for the page is found in `design.pdf` in the project root directory. See the requirements
section for more information. If the design or requirements are missing crucial details on how a particular
feature should be implemented, feel free to use your best judgement on how you would implement it yourself.

It is perfectly OK not to finish the entire design exactly as specified in the allotted time! You
are welcome and expected to prioritize.

The project template is set up with TypeScript, Vue-router, Cypress, Storybook, Tailwind and Fontawesome 6.
You are free to use these libraries or add new ones as you see fit. For styling, you can use Tailwind or 
CSS with any preprocessor you prefer. You can also use individual components from component libraries, but
please do not use full UI frameworks such as Material UI or Bootstrap.

You are free to use Vue Composition API or Options API as you prefer. Use of TypeScript is optional, but
appreciated.

# Requirements

### Navigation 

- A link should be added to the navigation bar which takes the user to `/issues`. When using this link or
visiting `/issues` from the browser's address bar, the user should be taken to a page listing their active security issues.

- Visiting `/issues/ignored` should take the user to a listing of their ignored security issues.

- There should be links to switch between ignored and active issues on the issues page. The links should
display the number of active or ignored issues, respectively.

### Issue listing

- Issues should be listed as cards distributed in columns. The number of columns should be determined responsively
based on media width, with a maximum of 3 columns on wide screen media.

- Issues should be listed in descending order by severity (Critical to Low).

### Issue cards

- Issue cards are by default in a closed state. When closed, they should list the issue's title, severity
and the number of affected targets. In the open state, the card should show the issue's description and
the list of all targets affected by the issue. In addition, it should be possible to switch between showing
the issue's description and remediation instructions. It should be possible to toggle between open and closed
states by pressing a button on the issue card. 

- When hovering over an issue card, it should display a button which can be used to set the issue as ignored
if the issue is active, or to set it as active if the issue is ignored. The user should be prompted to confirm
when using this action.

### Filtering issues

- For each severity level, there should be a button which can be used to toggle showing or hiding issues of
that severity. 

- The user should be able to select targets from a dropdown menu. When one or more targets are selected,
only issues which affect at least one of the selected targets should be shown. 

- The user should be able to freely input text in a search bar. When text is entered, only issues where the
title contains the search string should be shown. 

### Responsiveness

- The page should be usable on all typical devices, including touchscreen devices and mobile devices with
small screens. No design for small screens is included, and you are welcome to use your judgement on how
to implement this.

# API

The API is located at `http://localhost:3001`. It is implemented using [json-server](https://github.com/typicode/json-server). There exist 2 routes:

- `/issues` can be used to access issues
- `/targets` can be used to access targets

Standard REST syntax is used to read and write data to/from the API:

- `GET /issues` will return all issues
- `GET /issues/{id}` will return a single issue
- `POST /issues` can be used to create an issue
- `PUT /issues/{id}` can be used to overwrite an existing issue
- `PATCH /issues/{id}` can be used to partially update an existing issue
- `DELETE /issues/{id}` can be used to delete an issue

# Getting started

Prerequisites: Node.js v14 or greater, yarn or npm

- Install dependencies with `yarn install` or `npm install`
- Start the backend with `yarn server` or `npm run server`
- Start the frontend with `yarn dev` or `npm run dev`

The frontend will run at `http://localhost:3000` and API at `http://localhost:3001` by default.

# Storybook

You can run storybook with `yarn storybook` or `npm run storybook`. As this is a blank project, no components are documented, but feel free to add yours!

# Testing

For creating unit tests, the project includes Vitest. You can run unit tests with `yarn test` or `npm run test`. For e2e tests, there is Cypress, which you can
open with `yarn cypress open` or `npm run cypress open`.
