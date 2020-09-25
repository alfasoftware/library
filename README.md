# Library App

A simple web app to eventually replace the paper system currently used to loan books from the Alfa library. 

It is a work-in-progress that was started during an Innovation Day March 2020.

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

### Front-end
- The front-end is built using the JavaScript library [React](https://reactjs.org/)
- It uses [axios](https://npmjs.com/package/axios) to make `GET` requests to display information in UI and `POST` requests to send data to the back-end to persist in the database.    

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
