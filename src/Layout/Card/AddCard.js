//allows user to add new card to existing deck
//react
import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
//functions

import { readDeck, createCard } from "../../utils/api";
//component(s)
import CardForm from "./CardForm";

function AddCard() {
  const card = {
    front: "",
    back: "",
  };

  const [deck, setDeck] = useState({});
  const [formInfo, setFormInfo] = useState({ ...card });
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  const changeHandler = ({ target }) => {
    //console.log(target.name, target.value)
    setFormInfo({
      ...formInfo, //spread operator adds all the properties
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, formInfo);
    history.go(0); //refresh
  };

  const onClick = () => {
    history.push(`/decks/${deck.id}`);
  };

  if (!deck.id) {
    return <p>Loading...</p>;
  } else {
    
    //added breadcrumb nav back to home
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
        <h1>
          <span>{deck.name}</span>: <span>Add Card</span>
        </h1>
        <CardForm
          buttonText1="Done"
          buttonText2="Save"
          handleSubmit={handleSubmit}
          formInfo={formInfo}
          setFormInfo={setFormInfo}
          changeHandler={changeHandler}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default AddCard;
