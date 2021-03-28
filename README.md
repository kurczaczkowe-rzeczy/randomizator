# Randomizator [![App Release](https://img.shields.io/badge/dynamic/json?color=blue&label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()

If you want to test check this [link](https://kurczaczkowe-rzeczy.github.io/randomizator/). Test credentials:
- User name: randomizator@example.com
- Password: randomizator1234

We use storybook to present our components. If you want to see them check [this](https://randomizator-stories.web.app).

## Project overview
You can easily collect answers from unauthorized users. You can randomize from the form fields.
You can also filter the answers to be taken into account in the draw. Filtering is done by passing 
a string of characters that begin a given answer in the field.

## Technologies, frameworks and libraries used in app
[![React Release](https://img.shields.io/badge/node-12.18.3-blue)]()
[![React Release](https://img.shields.io/badge/npm-6.14.5-blue)]()
[![React Release](https://img.shields.io/badge/dynamic/json?color=blue&label=react&query=%24.dependencies.react&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Uuid Release](https://img.shields.io/badge/dynamic/json?color=blue&label=react-uuid&query=%24.dependencies['react-uuid']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Lodash Release](https://img.shields.io/badge/dynamic/json?color=blue&label=lodash&query=%24.dependencies.lodash&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![ESLint Release](https://img.shields.io/badge/dynamic/json?color=blue&label=eslint&query=%24.dependencies.eslint&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Node Sass Release](https://img.shields.io/badge/dynamic/json?color=blue&label=node-sass&query=%24.dependencies['node-sass']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![React Router Release](https://img.shields.io/badge/dynamic/json?color=blue&label=react-router&query=%24.dependencies['react-router']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![GitHub Pages Release](https://img.shields.io/badge/dynamic/json?color=blue&label=gh-pages&query=%24.dependencies['gh-pages']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Classnames Release](https://img.shields.io/badge/dynamic/json?color=blue&label=classnames&query=%24.dependencies.classnames&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Redux Release](https://img.shields.io/badge/dynamic/json?color=blue&label=redux&query=%24.dependencies.redux&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Firebase Release](https://img.shields.io/badge/dynamic/json?color=blue&label=firebase&query=%24.dependencies.firebase&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Thunk Release](https://img.shields.io/badge/dynamic/json?color=blue&label=redux-thunk&query=%24.dependencies['redux-thunk']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![DnD Release](https://img.shields.io/badge/dynamic/json?color=blue&label=react-dnd&query=%24.dependencies['react-dnd']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![React Tag Input Release](https://img.shields.io/badge/dynamic/json?color=blue&label=react-tag-input&query=%24.dependencies['react-tag-input']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Dropzone Release](https://img.shields.io/badge/dynamic/json?color=blue&label=react-dropzone&query=%24.dependencies['react-dropzone']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Papaparse Release](https://img.shields.io/badge/dynamic/json?color=blue&label=react-papaparse&query=%24.dependencies['react-papaparse']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Material-UI icon Release](https://img.shields.io/badge/dynamic/json?color=blue&label=material-ui&query=%24.dependencies['@material-ui/core']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()
[![Copy to clipboard](https://img.shields.io/badge/dynamic/json?color=blue&label=react-copy-to-clipboard&query=%24.dependencies['react-copy-to-clipboard']&url=https%3A%2F%2Fraw.githubusercontent.com%2Fkurczaczkowe-rzeczy%2Frandomizator%2Fmaster%2Fpackage.json)]()

## Description of major branches

The `master` branch contains the application version with the newest functionalities and bug fixes.

The `gh-pages` branch contains the built-in application code from the` prod` branch.

The `prod` branch contains the application code version that corresponds to the version that was built and released
in the GitHub Pages service under the link https://kuraczaczkowe-rzeczy.github.io/randomizator/.

## Screenshots

### Login form
![login-page](https://user-images.githubusercontent.com/33415084/95674977-25bb9000-0bb4-11eb-9175-824f79c2b2e4.png)

### Guest page
![form-display](https://user-images.githubusercontent.com/34583194/103149592-1f789100-476b-11eb-8d35-fbce43ab6bd5.png)

### Creator page
![after-login](https://user-images.githubusercontent.com/34583194/103149942-e8a47a00-476e-11eb-9601-13cbf2b06b15.png)
![show-list-forms](https://user-images.githubusercontent.com/33415084/96367974-3e4a1e00-1151-11eb-8fbc-ef82d197b314.png)

### Error page
![form-not-exist](https://user-images.githubusercontent.com/33415084/95674980-26542680-0bb4-11eb-8f30-a7d7e7a36c50.png)

![user-and-form-not-exist](https://user-images.githubusercontent.com/33415084/95674981-26ecbd00-0bb4-11eb-863a-9fd83ccd9fc5.png)

## Installation

To install this project you have to clone it with SSH/HTTPS. After cloning in the root directory of the project,
run `npm install` to install dependencies and now you can use one of [available scripts](https://github.com/kurczaczkowe-rzeczy/randomizator#available-scripts).

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br>
Special thanks for [rafgraph](https://github.com/rafgraph) and his [repo](https://github.com/rafgraph/spa-github-pages) that helps me
with routes redirect to 404. 
