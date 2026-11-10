import Header from "./components/Header";
import Footer from "./components/Footer";
// import BookText from "./components/BookText";
import BookCard from "./components/BookCard"

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <main>
          <BookCard title="Dune" author="Frank Herbert" genre="sci-fi" isRead = {true}/>
          <BookCard title="Piranesi" author="Susanna Clarke" genre="fantasy" isRead = {false}/>
          <BookCard title="Never Let Me Go" author="Kazuo Ishiguro" genre="literary" isRead = {true}/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
