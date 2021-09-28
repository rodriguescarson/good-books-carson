import "./style.css";
import { useState } from "react";

const bookDB = {
  Motivation: [
    {
      name: "Subtle Art Of not giving a fu*k",
      rating: "5/5",
      discription: "The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life is the second book by blogger and author Mark Manson. In it Manson argues that life's struggles give it meaning, and that the mindless positivity of typical self-help books is neither practical nor helpful."
    },
    {
      name: "48 Laws Of Power",
      rating: "4/5",
      discription: "The 48 Laws of Power is a non-fiction book by American author Robert Greene. The book is a bestseller, selling over 1.2 million copies in the United States, and is popular with prison inmates and celebrities."
    },

    {
      name: "Think like a monk",
      rating: "5/5",
      discription: "The aim of Think Like a Monk is to help individuals apply a monk mindset to their lives. Think Like a Monk shows you how to clear the roadblocks to your potential by overcoming negative thoughts, accessing stillness, and creating true purpose. It can be challenging to apply the lessons of monks to busy lives."
    },
  ],
  business: [
    {
      name: "Rich dad poor dad",
      rating: "5/5",
      discription: "Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence. "
    },
    {
      name: "Zero to One",
      rating: "5/5",
      discription: "Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters. "
    },
    {
      name: "The Lean Startup",
      rating: "4.5/5",
      discription: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies. Ries developed the idea for the lean startup from his experiences as a startup advisor, employee, and founder."
    }
  ],
  javascript: [
    {
      name: "Eloquent JavaScript", rating: "4/5",
      discription: "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications. JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon"
    },
    {
      name: "You Don't Know JS", rating: "3.5/5",
      discription: "Are you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes."
    },
    {
      name: "javascript the good parts", rating: "5/5",
      discription: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined."
    }
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
        <h1 className="header">Good Books</h1>
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
        <hr style={{ width: "80%", marginLeft: "10%" }} />
        <div style={{ width: "20%", align: "center", margin: "auto" }}>
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
                <div style={{ fontSize: "larger", textAlign: "center", fontWeight: "bold" }}> {book.name} </div>
                <div style={{ fontSize: "smaller", textAlign: "center", color: "orange", margin: "0.3em" }}> {book.rating} </div>
                <div style={{ fontSize: "smaller", textAlign: "center" }}> {book.discription} </div>
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
