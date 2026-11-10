export interface BookTextProps {
    title: string;
    author: string;
    genre: string;
    pages?: number;
}

function BookText({title, author, genre, pages}: BookTextProps) {
  return (
    <>
      <h3>{title}</h3>
      <p className="book-meta">{author} · {genre} {pages && `· ${pages} pages` }</p>
    </>
  );
}

export default BookText;
