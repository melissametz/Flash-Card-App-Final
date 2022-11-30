//react
import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
//functions
import { readDeck } from "../../utils/api";
//components
import StudyCard from "../Card/StudyCard";

function StudyDeck() {
  const [deck, setDeck] = useState({ cards: [] });
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const { deckId } = useParams();
  const card = deck.cards[currentCardIndex];

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  const history = useHistory();
  const handleNext = () => {
    if (currentCardIndex === deck.cards.length - 1) {
      return window.confirm(
        "Restart card? Click 'cancel' to return to the home page."
      )
        ? setCurrentCardIndex(0)
        : history.push("/");
    }
    setCurrentCardIndex(currentCardIndex + 1);
    setShowCard(false);
  };

  if (deck.cards.length < 3) {
    return (
      <div className="container">
        <div className="row">
          <h1>
            <span>Study</span>:<span>{deck.name}</span>
          </h1>
        </div>
        <h1>Not Enough Cards.</h1>
        <p>{`You need at least 3 cards to study. There are ${deck.cards.length} cards in this deck`}</p>
        <div>
          <Link to={`/decks/${deck.id}/cards/new`}>
            <button> Add Card </button>
          </Link>
        </div>
      </div>
    );
  }

  //added breadcrumb nav back to home and styling
  return (
    <div>
      <div className="d-flex justify-content-start list-group-item border-0">
        <h1>
          <span>Study</span>: <span>{deck.name}</span>
        </h1>
      </div>
      <div className="d-flex justify-content-start list-group-item border-0">
        <StudyCard
          card={card}
          currentCardIndex={currentCardIndex}
          setShowCard={setShowCard}
          showCard={showCard}
          handleNext={handleNext}
          cards={deck.cards}
        />
      </div>
    </div>
  );
}

export default StudyDeck;