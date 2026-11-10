import Header from "./components/Header";
import Footer from "./components/Footer";
// import BookText from "./components/BookText";
// import BookCard from "./components/BookCard"
import BookList from "./components/BookList";
import { BOOKS } from "./data/books";
import ResultCount from "./components/ResultCount";

const books = BOOKS;

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <main>
          <ResultCount count={books.length} />
          <BookList books={books} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
