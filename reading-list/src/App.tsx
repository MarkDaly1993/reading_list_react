import Header from "./components/Header";
import Footer from "./components/Footer";
import BookText from "./components/BookText";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <main>
          <div className="book-info">
            <BookText />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
