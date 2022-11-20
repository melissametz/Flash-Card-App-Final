//react features
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//react components
import DeckForm from "./DeckForm"; 
//functions
import { createDeck } from "../../utils/api/index";

//has a path in index.js
function CreateDeck() {
  //form shows fields for creating a new deck
  const initialFormState = {
    name: "", //an input field
    description: "", //text area field
  };

  //state variable will hold new deck
  const [formData, setFormData] = useState({ ...initialFormState });
  const history = useHistory();

  //updates the change and spread operator overwrites formData
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //create a new deck
  const handleSubmit = async (event) => {
    event.preventDefault();
    //const abortController = new AbortController();//Line 33:13:  'abortController' is assigned a value but never used
    //const response = await createDeck(formData, abortController.signal);//Line 34:15:  'response' is assigned a value but never used
    setFormData({ ...initialFormState });
    const newDeck = await createDeck(formData);
    history.push(`/decks/${newDeck.id}`);
  };

  //added breadcrumb nav back to home
  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
        <h1>Create Deck</h1>
        <DeckForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Link to="/">
          <button className="btn btn-secondary mr-1">Cancel</button>
        </Link>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateDeck;