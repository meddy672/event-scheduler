# Event-scheduler

## Overview
The event scheduler is a single page web appilcatiton built with **ReactJS**, **NodeJS & ExpressJS**, **Bootstrap 5** and **MongoDB**. The application allows for a user to create, update, delete, and filter events as well as RSVP to aparticular event.

## Required Software
These software technologies must be installed on your machine.
1. ReactJS
2. NodeJS
3. MongoDB

## Application Structure
The application is divided into two directories:
1. Frontend - ReactJS, Bootstrap 5
2. Backend - NodeJS, MongoDB

### Frontend
The frontend was created using `npx create-react-app` and consists of four main components:
1. ScheduleEvent - This is where you create an event.
2. Events - This is where you can see all events that have been created.
3. EventDetails - This is where you can modify or update an event.
4. RSVP - This is where you can RSVP to a particular event.

### Frontend Flow
The inital page is the **Schedule Event** page. You can create an event by filling out the form in its entirety. After you have created an event you can click on **See Events** to see all events you created. From the **See Events** page, you can select a particular event to delete, update, or RSVP to.

### Other Frontend Technologies Used
To better understand the frontend technologies see the `package.json` file.

### Starting The Frontend
1. `cd frontend`
2. `npm init`
3. `npm start`
4. Go to [http://localhost:3000](http://localhost:3000)

### Backend
The backend is a RESTFUL Web service built with NodeJS, ExpressJS and MongoDB. You can install NodeJS by visiting [NodeJS](https://nodejs.org/en/) and choosing the LTS.
You can install mongodb by visiting [MongoDB](https://www.mongodb.com/try/download/community) and install the community server that pertains to your operating system.
The main entry file for the backend is `index.js`.

### Backend Structure
The three main directories on the backend are:
1. Routes - This directory holds a single file that contains all available endpoints for the web service.
2. Controllers - This directory holds a single file that contains all computational logic to process request for events.
3. Models - This file holds a single file that holds an event model.

### Backend Flow
The `index.js` file contains an exported router from the routes module. When a request is sent it is sent to its repective endpoint and each endpoint contains a function to process logic needed to resolve the request.

### MongoDB
The application use the mongodb community server to persist data. In order to save data in the database you must start the community server. On a mac you can use the command `brew services start mongodb-community@4.4` to start the server.
There is no need to create a database as mongo will take care of that for you once data is submitted.

### Starting The Backend
1. `cd backend`
2. `npm init`
3. `npm start`
After this you will see a console message *Server is running on port 3000*

Project Obstacles
The most challenging part of this project was working with dates. Even using popular software packages like moment resolved some, but most certainly not all possible looming isses that could happen when working with dates.
