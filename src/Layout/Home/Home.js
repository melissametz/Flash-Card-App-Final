//Displays the lists of decks with options on home screen
//react
import React, {useState, useEffect} from "react";

//component(s)
import DeckList from "../Deck/DeckList";  

//functions
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api/index";


function Home(){ 
  //created as a prop for components
  const [decks, setDecks] = useState([]); 
  
  useEffect(() => { 
    listDecks().then(setDecks); 
  }, []);
    
  return (
    <div>
      <div>
        <Link to="/decks/new">
          <button className="btn btn-secondary btn-large">
            <i className="bi bi-plus" />
            <span className="oi oi-plus" />{"  "}
            Create a New Deck
          </button>
        </Link>
      </div>
      <DeckList decks={decks} setDecks={setDecks} />
    </div>
  );
}

export default Home;