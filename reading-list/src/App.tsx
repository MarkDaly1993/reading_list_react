import Header from "./components/Header";
import Footer from "./components/Footer";
// import BookText from "./components/BookText";
// import BookCard from "./components/BookCard"
import BookList from "./components/BookList";
import { BOOKS } from "./data/books";
import ResultCount from "./components/ResultCount";
// import Counter from "./scratch/Counter";
// import CreateList from "./scratch/Shelf";
import {useState } from "react"
import type {Book} from "./types"
import Booklist2 from "./components/BookCard copy"
import BookCard2 from "./components/BookCard copy";


function App() {

const [books, setBooks] = useState<Book[]>(BOOKS);

function resetShelf(){
  setBooks(BOOKS);
}

function toggleRead(id: number){
  return setBooks(books.map((book) => book.id === id ? {...book,is_read: !book.is_read} : {...book}));
}

function deleteBook(id: number){
  return setBooks(books.filter((currBook) => currBook.id !== id));
}

  return (
    <>
      <div className="page">
        <Header />
        <main>
          <ResultCount count={books.length} />
          <BookList books={books} onToggleRead={toggleRead} onDeleteBook={deleteBook} onReset={resetShelf}/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
