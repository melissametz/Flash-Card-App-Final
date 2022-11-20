//react
import React from "react";
//import { Link } from "react-router-dom";

function StudyCard({
  card,
  currentCardIndex,
  cards,
  setShowCard,
  showCard,
  handleNext,
}) {
  const handleFlip = () => {
    setShowCard(!false);
  };
  const handleFlip2 = () => {
    setShowCard(false);
  };

  //show card is not false to show back of card
  //edited
  if (showCard) {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Card {currentCardIndex + 1} of {cards.length}
            </h4>
            <p className="card-text">{card?.back}</p>

            <button className="btn btn-secondary mr-1" onClick={handleFlip2}>
              Flip
            </button>
            <button className="btn btn-primary mr-1" onClick={handleNext}>
              Next Card
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            Card {currentCardIndex + 1} of {cards.length}
          </h4>
          <p className="card-text">{card?.front}</p>
          <div className="d-flex justify-content-start">
            <button className="btn btn-primary mr-1" onClick={handleFlip}>
              Flip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyCard;

/*      <main className="card" style={{ padding: "12px" }}>
        <div className="d-flex justify-content-end">
          <p>
            Card {currentCardIndex + 1} of {cards.length}
          </p>
        </div>
        <div className="d-flex justify-content-space-around">
          <p>{card.back}</p>
        </div>
        <div className="d-flex justify-content-start">
          <button onClick={handleFlip2}>Flip</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </main>
    );
  }

  //added skip button
  return (
    <div className="card">
      <div className="d-flex justify-content-end">
        <h5>
          Card {currentCardIndex + 1} of {cards.length}
        </h5>
      </div>
      <div className="d-flex justify-content-space">{card.front}</div>
      <div className="d-flex justify-content-between">
        <button onClick={handleFlip}>Flip</button>
        <button onClick={handleNext}>Skip</button>
      </div>
    </div>
  );*/
