import React from "react"
import "../App.css"

const BookCard = (props) => {
    const book = props.book

    return (
        <div className="card-container">
            {/* <img
                src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
                alt=""
            /> */}
            <div className="card-body">
                <h4 className="card-title font-weight-bold text-primary">
                    {book.firstName}
                </h4>
                <p className="card-text font-weight-bold text-muted">
                    {book.lastName}
                </p>
                <p className="card-text text-muted">{book.title}</p>
                <a href={`/show-member/${book._id}`} class="btn btn-primary">
                    More
                </a>
            </div>
        </div>
    )
}

export default BookCard
