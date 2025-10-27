import React from 'react'

function Book({ book }) {
  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Price: ₹{book.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

const books = [
  {
    image: "https://m.media-amazon.com/images/I/71EUTt1F2vL._UF1000,1000_QL80_.jpg",
    title: "Mathematics Essentials",
    price: 785,
  },
  {
    image: "https://m.media-amazon.com/images/I/61GmK-tpSxL._UF1000,1000_QL80_.jpg",
    title: "Chemistry Concepts",
    price: 375,
  },
  {
    image: "https://m.media-amazon.com/images/I/71zIDc0j0OL.jpg",
    title: "Physics Fundamentals",
    price: 465,
  },
];

function App() {
  return (
    <div className="book-list">
      {books.map((b, i) => (
        <Book key={i} book={b} />
      ))}
    </div>
  );
}


export default App