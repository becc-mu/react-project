# Sample-React-Project

This project is to help me understand configuration and set up of a functional React project from the scratch without using Facebook create-react-app. Throughout the set up yarn is used not npm.

## Instructions

Create new project: Type `mkdir directory-name && cd directory-name`

Initialise `yarn init`

## Installing React and ReactDOM

We have a directory to hold our project. Now we install React and ReactDOM. Type `yarn add react react-dom`
The add sub-command installs a module in the current project. You can specify more than one module by separating them with a space. Here, we are installing react and react-dom.

## Webpack Development Server

To send the components to the browser We will be using a development server called webpack-dev-server. To install webpack and install it as a development dependencies, type `yarn add -D webpack webpack-dev-server`

## Create The First React-App

There are two files needed in the project directory: type `touch index.html index.js`
and add the html tags with one `div` which has the ID `root`.

In the `index.js` file, enter the following.

```import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement("div", null, "Hello World"), // <div>Hello World</div>
  document.getElementById("root")
)
```

Open package.json in your favorite editor and make changes such that it results in this file — immediately after `"main": "index.js",` add the script below

```"scripts": {
    "start": "webpack-dev-server index.js"
  },
```

## Run the project on localhost

To run the project on <http://localhost:> 8080, Type`yarn start` you should be able to see `Hello world` on your browser.

To terminate type `ctrl + c`

## Install Babel (JSX transpiler)

Install Babel Core as the engine that is going to run the transpiler and the plugins specific for React JSX:
Type `yarn add -D @babel/core @babel/preset-react`

To create this project I followed tutorials from this page: <https://codeburst.io/yet-another-beginners-guide-to-setting-up-a-react-project-part-1-bdc8a29aea22>
