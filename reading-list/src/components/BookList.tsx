import type { Book } from "../types";
// import { BOOKS } from "../data/books";
import BookCard from "./BookCard";

interface BookListProp {
  books: Book[];
  onToggleRead: (id: number) => void;
  onDeleteBook: (id: number) => void;
  onReset: ()=> void
}

function BookList({ books, onToggleRead, onDeleteBook,onReset }: BookListProp) {

  console.log(books)
  return (<>
    <button type="button" onClick={()=>{onReset()}}>Reset shelf</button>
    <ul className="book-list">
      {books.length === 0 ? (
        <li className="empty-state">There are no books</li>
      ) : (
        books.map((favouriteBook) => {
          return (
            <BookCard
              id={favouriteBook.id}
              key={favouriteBook.id}
              title={favouriteBook.title}
              author={favouriteBook.author}
              genre={favouriteBook.genre}
              isRead={favouriteBook.is_read}
              pages={favouriteBook.pages}
              toggleRead = {onToggleRead}
              deleteBook={onDeleteBook}
            />
          );
        })
      )}
    </ul>
    </>
  );
}

export default BookList;
