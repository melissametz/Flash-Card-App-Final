//react
import React from "react";
import { Link } from "react-router-dom";
//functions
import { deleteCard } from "../../utils/api/index";

function CardItem({deck, card}){
    const handleDelete = () => {
    const confirm = window.confirm("Delete this card? You will not be able to recover it.");
      
    if (confirm){
      //const abortController = new AbortController();
      deleteCard(card.id).then(
      window.location.reload()
      );
    }
  };
    
    //added padding and icons to buttons
    return (
      <div className="card">
        <div className="list-group-item list-group-item-action border-0 flex-column align-items-startd-flex justify-content-between">
          <p>
            <b>Front:</b> {card.front}
          </p>
          <p>
            <b>Back:</b> {card.back}
          </p>
        </div>

        <div
          className="d-flex justify-content-start"
          style={{ padding: "12px" }}
        >
          <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
            <button className="btn btn-secondary mr-1">
              <span className="oi oi-pencil" /> {""}
              Edit
            </button>
          </Link>

          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger mr-1"
          >
            <span
              className="oi oi-trash"
              onClick={handleDelete}
              value={card.id}
            />{" "}
            Delete
          </button>
        </div>
      </div>
    );
}

export default CardItem;