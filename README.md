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
