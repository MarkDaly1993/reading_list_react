import Header from "./components/Header";
import Footer from "./components/Footer";
// import BookText from "./components/BookText";
// import BookCard from "./components/BookCard"
import BookList from "./components/BookList";
import { BOOKS } from "./data/books";
import ResultCount from "./components/ResultCount";
// import Counter from "./scratch/Counter";
// import CreateList from "./scratch/Shelf";
import { useState } from "react";
import type { Book } from "./types";
import ReadCount from "./components/ReadCount";

function App() {
  const [books, setBooks] = useState<Book[]>(BOOKS);
  const [readCount, setReadCount] = useState(6);
  const [total, setTotal] = useState(12);

  function resetShelf() {
    setBooks(BOOKS);
    setTotal(books.length);
  }

  function toggleRead(id: number) {
    // setBooks(
    const update = books.map((book) =>
      book.id === id ? { ...book, is_read: !book.is_read } : { ...book },
    );
    setBooks(update);
    setReadCount(update.filter((currBook) => currBook.is_read === true).length);

    // );
  }

  function deleteBook(id: number) {
    const update = books.filter((currBook) => currBook.id !== id);
    setBooks(update);
    setTotal(update.length);
    setReadCount(update.filter((currBook) => currBook.is_read === true).length);
  }

  return (
    <>
      <div className="page">
        <Header />
        <main>
          <ResultCount count={books.length} />
          <BookList
            books={books}
            onToggleRead={toggleRead}
            onDeleteBook={deleteBook}
            onReset={resetShelf}
          />
          <ReadCount readCount={readCount} total={total} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
