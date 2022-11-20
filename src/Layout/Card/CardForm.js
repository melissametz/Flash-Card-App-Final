//react
import React, {useState} from "react";
//import { useHistory } from "react-router-dom";

function CardForm({ onClick, buttonText2, buttonText1, handleSubmit, changeHandler, formInfo}){
  //const history = useHistory(); //Line 5:9:  'history' is assigned a value but never used
  const [holder, setHolder] = useState({ ...formInfo });

  if (!holder.front && !holder.back) {
    setHolder({
      front: "Front of card",
      back: "Back of card",
    });
  }

  //Line 16:9:  'goToDeck' is assigned a value but never used
  /*const goToDeck = () => {
      history.goBack()
  };*/

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="front" className="d-flex flex-column">
          <b>Front of Card:</b>
          <textarea
            id="front"
            name="front"
            type="text"
            value={formInfo.front}
            onChange={changeHandler}
            holder={holder.front}
            required
          ></textarea>
        </label>
        <label htmlFor="back" className="d-flex flex-column">
          <b>Back of Card:</b>
          <textarea
            id="back"
            name="back"
            type="text"
            value={formInfo.back}
            onChange={changeHandler}
            holder={holder.back}
            required
          ></textarea>
        </label>
        <br />
        <div className="row">
          <button className="btn btn-danger mr-1" onClick={onClick}>
            {buttonText1}
          </button>
          <button className="btn btn-primary mr-1" type="submit">
            {buttonText2}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CardForm;