import React from 'react';

function Product(props) {
    console.log(props.bookTitle);
    console.log(props.bookAuthor);

    return (
        <div className="product">
            <h2 className="book-title">
                {props.bookTitle}
            </h2>
            <div className="book-author">
                {props.bookAuthor}
            </div>
            <div className="book-description">
                {props.bookDescription}
            </div>
            {/* Add more */}
        </div>
    );
}

export default Product;