//react
import React from "react";
import { Link } from "react-router-dom";

//function
import { deleteDeck } from "../../utils/api/index"; //gets the function from the utils folder

function DeckList({ decks }) {
  const handleDelete = async ({ target }) => {
    const confirm = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (confirm) {
      const id = target.value;
      await deleteDeck(id);
      window.location.reload(); //reloads document
    }
  };

  //adjusted return to adjust buttons and display on home page

  return (
    <div>
      {decks.map((deck, index) => (
        <div className="card w-100 my-3" key={index}>
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <h3 className="card-title">{deck.name}</h3>
                <p> {deck.cards.length} cards</p>
              </div>
            </div>
            <p className="card-text">{deck.description}</p>
            <div>
              <div className="row justify-content-between">
                <div className="col-4">
                  <Link to={`/decks/${deck.id}`}>
                    <button className="btn btn-secondary mb-2 mr-2 mt-2">
                      <span className="oi oi-eye" /> View
                    </button>
                  </Link>
                  <Link to={`/decks/${deck.id}/study`}>
                    <button className="btn btn-primary mb-2 mr-2 mt-2">
                      <span className="oi oi-book" /> Study
                    </button>
                  </Link>
                  <button
                    value={deck.id}
                    className="btn btn-danger mb-2 mr-2 mt-2"
                    onClick={handleDelete}
                  >
                    <span className="oi oi-trash" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeckList;
