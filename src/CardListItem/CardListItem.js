import React, { Component } from "react";
import '../styles/main.scss';

class CardListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.userCardsData.find(card => {
        return card.cardName === props.cardName;
      }).cardCount
    };
  }

  removeListItem = event => {
    this.props.removeListItem(parseInt(event.target.closest("li").id));
  };

  increaseCardCount = props => {
    if (this.state.count < 4) {
      this.setState(state => {return { count: state.count + 1 }},
        () => this.updateUserCardsDataState(props));
    }
  };

  decreaseCardCount = props => {
    if (this.state.count > 1) {
      this.setState(state => {return { count: state.count - 1 }},
        () => this.updateUserCardsDataState(props));
    }
  };

  updateUserCardsDataState = () => {
    const newUserCardsData = this.props.userCardsData.map(card => {
      if (this.props.cardName === card.cardName) {
        card.cardCount = this.state.count;
      }
      return card;
    });
    return this.props.setCardCount(newUserCardsData);
  };

  render() {
    return (
      <li id={this.props.cardIndex} className="cardlist--item">
        {this.props.cardName}
        <i className="fas fa-minus" onClick={this.decreaseCardCount}/>
        <span>{this.state.count}</span>
        <i className="fas fa-plus" onClick={this.increaseCardCount}/>
        <i className="far fa-trash-alt" onClick={this.removeListItem}/>
      </li>
    );
  }
}

export default CardListItem;