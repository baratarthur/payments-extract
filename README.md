# Payments extract
This is the final project of Cielo bootcamp, created by Arthur Barata.

## Project environment
This project uses npm workspaces, you can see more on [this link](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

## Initial steps
- First download the project
- run ```npm install``` on the root directory
- run ```npm run start:front``` to start the ui on default port 5173
- run ```npm run start:back``` to start the server that will serve the json file on port 3000

## Project strcture
You can find 2 directories on the root of this application
- payments-extract-ui: that host the front end code
- payments-extract-server: that host the server code
The front end is made using react, vite and typescript, following this project structure:
- assets: handle the project assets
- core: stores the project data manipulation and state structures
    - api: store Axios client
    - contexts: store the applications contexts
    - hooks: store custom hooks
    - models: store the typescript interface of application data
    - utils: store Utils objects like currency and date modifiers
- shared: stores common UI components
- App.tsx: stores the main project page with the extract list

## Tests
There is two commands to run tests
- npm run test
- npm run test:coverage