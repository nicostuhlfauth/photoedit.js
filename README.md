# Photoedit.js
This is a photo editing application, written in pure Javascript and HTML5.

## Get it up and running

To use the tool the latest version of node.js needs to be installed.

Download and unpack the project.

Create dependencies by opening a terminal in directory and run "npm install"

Then start the server with "npm start" and browse to "localhost:1337"

## About the project structure
- assets/js: contains javascript functions, starting point: photo.js
- assets/data: contains json output for displaying the gallery
- api/controllers: contains FileController, responsible for image uploading and JSON processing
- views: contains views used in our project
- config/routes.js: handles routing for our application

## About this project
This project is part of a university course and is maintained by [nicostuhlfauth](https://github.com/nicostuhlfauth) and [benediktrauch](https://github.com/benediktrauch). The task was to create a photo editing application in Javascript using HTML 5 Canvas, but without using the build-in Javascript functions like rotate/transform etc.

## Credits
We used [sails.js](https://github.com/balderdashy/sails)-Framework, licensed MIT, the [materializecss](https://github.com/dogfalo/materialize/)-package, licensed MIT and Material Design Icons. Thanks.
