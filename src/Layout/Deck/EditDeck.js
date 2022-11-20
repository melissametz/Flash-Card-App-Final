//react
import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

//function
import { readDeck, updateDeck } from "../../utils/api/index";

//component
import DeckForm from "./DeckForm";

function EditDeck() {
  const initialFormState = {
    name: "",
    description: "",
  };

  const history = useHistory();
  const { deckId } = useParams(); //from url
  const [deck, setDeck] = useState({ ...initialFormState });

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
  }, [deckId]);

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    async function updateDeckData() {
      await updateDeck(deck);
      history.push(`/decks/${deck.id}`);
    }
    updateDeckData();
  };

  //added breadcrub back to home page and submit button for editing deck information
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">{deck.name}</li>
          <li className="breadcrumb-item">Edit Deck</li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
      <DeckForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={deck}
      />
      <div>
        <button
          value={deck.id}
          className="btn btn-primary mb-2 mr-2 mt-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditDeck;

//previously
/*<div>
            <div className="container">
                <div className="row">
                    <h1>Edit Deck</h1>
                    <br />
                </div>
                <div className="row w-100">
                    <DeckForm formData={deck} handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
                <div className="row">
                    <Link to={`/decks/${deckId}`}>
                      <button className="btn btn-secondary mr-1">
                      Cancel
                      </button>
                      </Link>
                      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                      Save
                      </button>
                    </div>
                </div>
            </div>*/
