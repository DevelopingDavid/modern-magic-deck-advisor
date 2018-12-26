import React, { Component } from 'react';
import './CardArea.css';
import Card from '../Card/Card.js';
import Header from '../Header/Header.js';
import Deck from '../Deck/Deck.js';

class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sortCardsByName(card1, card2) {
    if (card1.cardName < card2.cardName) {
      return -1;
    } else {
      return 1;
    }
  }

  render(props) {
    let cardAreaView = [];
    if (this.props.cardAreaView === 'myCardList') {
      this.props.userCardsData.sort(this.sortCardsByName);
      cardAreaView = this.props.userCardsData.map(userCard => {
        return <Card userCard={userCard} key={userCard.cardName} />
      });
    } else if (this.props.cardAreaView === 'compareDecks') {
      this.props.userDecks.sort((a, b) => a.price - b.price);
      cardAreaView = this.props.userDecks.map(userDeck => {
        return <Deck userDeck={userDeck} key={userDeck.deckName} />
      });
    }

    return (
      <div className="card-area">
        <Header 
          setAsideView={this.props.setAsideView}/>
        <section className="card-area--section">
          {cardAreaView}
        </section>
      </div>
    );
  }
}

export default CardArea;
