import React from 'react';
import Product from './product';

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum efficitur, posuere mi pretium, ullamcorper purus. Sed in convallis enim. Nunc libero ante, sollicitudin quis ligula a, dictum molestie mauris. Sed nibh nisi, efficitur sed velit sed, fringilla euismod libero. Sed varius sollicitudin justo sed luctus.";

function App() {
    return (
        <article>
            {/* A JSX comment */}
            <h1>Shopping cart</h1>
            <section className="products-container"> 
                <Product 
                    bookTitle="Svensk historia" 
                    bookAuthor="Frans G. Bengtsson"
                    bookDescription={lorem} />
                <Product 
                    bookTitle="Zutobis resa" 
                    bookAuthor="Joel Waldenbäck"
                    bookDescription={lorem} />
            </section>
        </article>
    );
}

export default App;