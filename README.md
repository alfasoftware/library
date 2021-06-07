# Library App

A web app to digitise the lending system for the Alfa office library. 
The project is a work-in-progress and was initiated as part of the first remote Innovation Day in March 2020.

```
       .--.                   .---.
   .---|__|           .-.     |~~~|
.--|===|--|_          |_|     |~~~|--.
|  |===|  |'\     .---!~|  .--|   |--|
|%%|   |  |.'\    |===| |--|%%|   |  |
|%%|   |  |\.'\   |   | |__|  |   |  |      Lo❤e the Library!
|  |   |  | \  \  |===| |==|  |   |  |
|  |   |__|  \.'\ |   |_|__|  |~~~|__|
|  |===|--|   \.'\|===|~|--|%%|~~~|--|
^--^---'--^    `-'`---^-^--^--^---'--'
```

## User Stories

- As a library manager, I want to be able to add new books to the library.
- As a library user, I want to see a list of books that are in the library.
- As a library user, I want to seach for available books at the library.
- As a library user, when I am interested in a book, I want to see the title, author and other details of that book.
- As a library user, I want to see what books I have currently have loaned and when they are due back.
- As a library user, when I really like a book, I want to take it out on loan.


## Tech Stack

### Back-end
- The back-end is a REST API built using [Spring Boot](https://spring.io/guides/gs/spring-boot/).
- It has several end-points that the front-end calls upon to retrieve data. 

### Back-end setup 
- Ensure you have a [GitHub account](https://github.com/) & GitHub Deskdop App downloaded.
- Make sure your GitHub account is added to alfasoftware on GitHub.
- Go to [GitHub/alfasoftware](https://github.com/alfasoftware) you should be able to accept the invitation if this is a new account.
- Make sure your account has been added to the library-maintainers group.
- Download the library app code from GitHub.
- Ensure you have a [Postman account](https://www.postman.com/downloads/) & Postman Desktop App downloaded. 
- You then have to be added to the necessary Team workspace by someone already on the team.
- Make sure you have SQLyog
- Create new connection in SQLyog with libraray database
- Next step is to create a new project from existing sources in IntelliJ with the library app code downloaded from GitHub. 
- Update the appplication.properties file in IntelliJ to have spring.jpa.hibernate.ddl-auto=**create**
- Run the app 
- Stop and then re-start the app after updating that same line to spring.jpa.hibernate.ddl-auto=**update**
- Add some ISBN's into your database via postman's api/addbookposting

### Front-end
- The front-end is built using the JavaScript library [React](https://reactjs.org/)
- It uses [axios](https://npmjs.com/package/axios) to make `GET` requests to display information in UI and `POST` requests to send data to the back-end to persist in the database.

### Front-end setup 
- Downlaod  [NodeJS, npm](https://www.npmjs.com/get-npm)
- Go to powershell and cd into the library-app downloaded from github
- Run npm install 
- Run npm start

## To use the app
- First, clone this repo.
- Both the back-end and front-end need to be running simultaneously for the app to work...   

### To run the back-end API
- In your IDE open the `library-backend` folder and run the `main()` method in the `Application.java` file.

### To run the app (front-end)
- Navigate to library-app folder
- Run `npm install --save axios` in Command Prompt/Terminal to get node modules and include axios in the package.
- Run `npm install --save react-router-dom` in Command Prompt/Terminal to include react-router-dom in the package.
- Run `npm start` in Command Prompt/Terminal to run the app.
- To stop app use `ctrl+c` for Command Prompt or `cmd+c` in Terminal.

## Progress so far

The front-end is currently presenting a home page and a catalogue of the books in the library 

The back-end currently stores a table of books and a table of loans. It utilises the [Google Books API](https://developers.google.com/books/) to retrieve full details of the books available in the library. There are several end-points for the front-end to call upon to retrieve and send data. 
