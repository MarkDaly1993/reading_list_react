import Header from "./components/Header";
import Footer from "./components/Footer";
// import BookText from "./components/BookText";
// import BookCard from "./components/BookCard"
import BookList from "./components/BookList";
import { BOOKS } from "./data/books";
import ResultCount from "./components/ResultCount";
import Counter from "./scratch/Counter";
import CreateList from "./scratch/Shelf";

const books = BOOKS;

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <main>
          <ResultCount count={books.length} />
          <BookList books={books} />
          <Counter />
          <CreateList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
