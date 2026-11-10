import type { Book } from "../types";
// import { BOOKS } from "../data/books";
import BookCard from "./BookCard";

interface BookListProp {
  books: Book[];
}

function BookList({ books }: BookListProp) {
  return (
    <ul className="book-list">
      {books.length === 0 ? (
        <li className="empty-state">There are no books</li>
      ) : (
        books.map((favouriteBook) => {
          return (
            <BookCard
              key={favouriteBook.id}
              title={favouriteBook.title}
              author={favouriteBook.author}
              genre={favouriteBook.genre}
              isRead={favouriteBook.is_read}
              pages={favouriteBook.pages}
            />
          );
        })
      )}
    </ul>
  );
}

export default BookList;
