App
├── Header string
├ ├── h2
├ ├── p
├
├── List of Books // <--- access to BOOKS data from data/books.ts
├──ul
├── BookCard <---- access to individual books -> interface Book
├── id
------------------------
├── <h2> title
├── <p> author genre
├── <p> is read
------------------------
├── mark read/ unread button
├── delete button

            ├── BookCard //id, title, author , is read
            ├── BookCard //id, title, author , is read


└── <p> Footer string -> make Component

We chose to make Footer a component because we though that it would keep the App cleaner, more readable and neater. It also allows us to add other functionality or text later on in a better way. It also helps with the formatting and overall structure of the project.
