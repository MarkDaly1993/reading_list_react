import BookText from "./BookText";

export interface BookCardProps {
    id: number
    title: string;
    author: string;
    genre: string;
    isRead: boolean;
    pages?: number;
    toggleRead: (id: number) => void;
    deleteBook: (id: number) => void
}

function BookCard({id ,title, author, genre, isRead, pages, toggleRead, deleteBook }: BookCardProps) {


    return (<li className="book-card">
        <div className="book-info">
            {isRead ? <span className="badge">Read</span> : null}
            <BookText title={title} author={author} genre={genre} pages={pages} />
        </div>
        <div className="book-action">
            <button aria-label={isRead ? `Mark unread ${title}` : `Mark read ${title}`}
                id="read-button" onClick={() => {toggleRead(id)}} type="button">{isRead ? "Mark unread" : "Mark read"}</button>

            <button onClick={() => deleteBook(id)} aria-label={`Delete ${title}`} id="Delete" type="button">Delete</button>
        </div>
    </li>);
}

export default BookCard;