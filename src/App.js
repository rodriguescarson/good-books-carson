import "./style.css";
import { useState } from "react";

const bookDB = {
  Motivation: [
    {
      name: "Subtle Art Of not giving a fu*k",
      rating: "5/5"
    },
    {
      name: "48 Laws Of Power",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Rich dad poor dad",
      rating: "5/5"
    },
    {
      name: "Zero to One",
      rating: "5/5"
    }
  ],
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
    <header>
    <h1  className="header">Good Books</h1>
    <p style={{ fontSize: "smaller" }}>
        Checkout my favorite books. Select a genre to get started
      </p>
      </header>

<main>
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className="btn-check"
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
        <hr style={{ width: "80%",marginLeft:"10%"}}/>
      <div>
        <ul>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger",textAlign: "center" }}> {book.name} </div>
              <div style={{ fontSize: "smaller",textAlign: "center" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      </main>

      <footer className="footer container">
    <div className="footer-header">Connect with me on social media</div>
    <ul className="social-links list-non-bullet">
        <li className="list-item-inline">
            <a className="link" href="https://www.linkedin.com/in/rodriguescarson">
                Linkedin
            </a>
        </li>
        <li className="list-item-inline">
            <a className="link" href="https://github.com/rodriguescarson">
                Github
            </a>
        </li>
        <li className="list-item-inline">
            <a className="link" href="https://twitter.com/carsonmarz">
                twitter
            </a>
        </li>
    </ul>
</footer>
    </div>
  );
}
