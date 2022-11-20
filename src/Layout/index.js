import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home" 

import AddCard from "./Card/AddCard";
import EditCard from "./Card/EditCard.js";
import CreateDeck from "./Deck/CreateDeck";
import EditDeck from "./Deck/EditDeck";
import OneDeck from "./Deck/OneDeck";
import StudyDeck from "./Deck/StudyDeck";

function Layout() {
  
  return (
    <div>
      <Header />
      <div className = "container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/study" >
            <StudyDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit" >
            <EditCard />
          </Route>
          <Route path="/decks/:deckId"  >
            <OneDeck />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;