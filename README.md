# Library App
This app will enable borrowers to log the books they take out on loan. Initial loan period will be one week.
It is a work-in-progress that was started during an Innovation Day hosted by Alfa Systems by a team of 7.

Technologies used include React, Spring Boot and the Google Books API.

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

## Key Stories

As an library user, I want to see a list of books that are in the library, before I go to the library. - GET request

As a library manager, when I have a new book, I want to add it to the library.  - POST request

As library user, when I am interested in a book, I want to see the title and author of that book

## Borrowing Actions

As a library user, when I really like a book, I want to take it out on loan.

As a library user, when I take out a book, I want to know when book is due back in the library, so I can return it on time (concept: fix it to a week initially)

## Using the app

* Clone this repo
* Navigate to library-app folder
* Run ```npm install``` in Command Prompt/Terminal to get node modules
* Run ```npm start``` in Command Prompt/Terminal
* To stop app use ```ctrl+c``` for Command Prompt or ```cmd+c``` in Terminal

## Progress so far

The React app is currently presenting book information and thumbnail image for a single book which is fetched via the Google Books API.

Tha Spring Boot backend is utilising a database to implement a catalogue of books based on ISBN as the key. It allows for books to be taken out on loan by a user and for multiple copies of a book.