import BookText from "./BookText";

export interface BookCardProps {
    title: string;
    author: string;
    genre: string;
    isRead: boolean;
}

function BookCard({ title, author, genre, isRead }: BookCardProps) {


    return (<li className="book-card">
        <div className="book-info">
            {isRead ? <span className="badge">Read</span> : null}
            <BookText title={title} author={author} genre={genre} />
        </div>
        <div className="book-action">
            <button aria-label={isRead ? `Mark unread ${title}` : `Mark read ${title}`}
                id="read-button" type="button">{isRead ? "Mark unread" : "Mark read"}</button>

            <button aria-label={`Delete ${title}`} id="Delete" type="button">Delete</button>
        </div>
    </li>);
}

export default BookCard;