//react
import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
//functions
import { readDeck, deleteDeck } from "../../utils/api/index";
//components
import CardItem from "../Card/CardItem";

function OneDeck() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();

    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  const handleDelete = async ({ target }) => {
    const abortController = new AbortController();
    const confirm = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (confirm) {
      await deleteDeck(deckId, abortController.signal);
      history.push("/");
    } else {
      history.go(0);
    }
  };

  //added breadcrumb back to homepage and styling
  if (!deck.id) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {deck.name}
            </li>
          </ol>
        </nav>

        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div className="row justify-content-between">
          <div className="col-8">
            <Link to={`/decks/${deck.id}/cards/new`}>
              <button className="btn btn-secondary mr-1">
                <span className="oi oi-plus" /> Add Card
              </button>
            </Link>

            <Link to={`/decks/${deck.id}/study`}>
              <button className="btn btn-primary mr-1">
                <span className="oi oi-book" /> Study
              </button>
            </Link>

            <Link to={`/decks/${deck.id}/edit`}>
              <button className="btn btn-secondary mr-1">
                <span className="oi oi-pencil" /> Edit Deck
              </button>
            </Link>
          </div>

          <div className="col-2">
            <button
              className="btn btn-danger"
              onClick={handleDelete}
              value={deck.id}
            >
              <span className="oi oi-trash" /> Delete Deck
            </button>
          </div>
        </div>

        <div className="mt-4 card-list">
          <h2>Cards</h2>
          <ul className="list-group">
            {deck.cards.map((card) => (
              <CardItem deck={deck} card={card} key={card.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default OneDeck;
