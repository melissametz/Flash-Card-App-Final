//react
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
//functions
import { readCard, readDeck, updateCard } from "../../utils/api/index";
//component(s)
import CardForm from "./CardForm";

function EditCard() {
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const [error, setError] = useState(null);
  const { deckId, cardId } = useParams();

  useEffect(() => {
    setDeck({});
    setError(null);
    getData(deckId, cardId);
  }, [deckId, cardId, error]);

  async function getData(deckId, cardId) {
    const abortController = new AbortController();
    try {
      const deckFromApi = await readDeck(deckId, abortController.signal);
      const cardFromApi = await readCard(cardId, abortController.signal);
      setDeck(deckFromApi);
      setCard(cardFromApi);
    } catch (error) {
      setError(error);
    }
    return () => abortController.abort();
  }

  const onClick = () => {
    history.push(`/decks/${deck.id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const abortController = new AbortController();
    const response = await updateCard({ ...card }, abortController);
    history.push(`/decks/${deckId}`);
    return response;
  };

  const changeHandler = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  //added breadcrumb nav back to home
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">{deck.name}</li>
          <li className="breadcrumb-item">Edit Card</li>
        </ol>
      </nav>
      <h2>{deck.name}: Edit Card</h2>
      <CardForm
        buttonText1="Cancel"
        buttonText2="Submit"
        formInfo={card}
        setFormInfo={setCard}
        onClick={onClick}
        changeHandler={changeHandler}
        handleSubmit={handleSubmit}
      ></CardForm>
    </div>
  );
}

export default EditCard;