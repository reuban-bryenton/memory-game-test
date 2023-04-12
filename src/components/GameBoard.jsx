import React, { useState } from 'react';
import Card from './Card';
import ResetButton from './ResetButton';

const GameBoard = (props) => {
  const [state, setState] = useState({
    open_cards: [],
    matched_cards: [],
    moves: 0,
  });

  const checkMatched = () => {
    if (state.open_cards.length != 2)
    return;
    var open_cards = state.open_cards;
    var matched_cards = state.matched_cards;
    var i1 = open_cards[0];
    var i2 = open_cards[1];
    var card1 = cards[i1];
    var card2 = cards[i2];

    console.log(open_cards);
    if (card1.value === card2.value) {
      matched_cards.push(i1);
      matched_cards.push(i2);
    }
    setState({
      open_cards: [],
      matched_cards,
      moves: state.moves + 1,
    });
  }

  const handleCardClick = (index) => {
    var open_cards = state.open_cards;
    var matched_cards = state.matched_cards;

    if (open_cards.includes(index) || matched_cards.includes(index) || open_cards.length === 2) {
      return;
    }
    open_cards.push(index);
    setState({
      open_cards,
      matched_cards,
      moves: state.moves,
    });
    if (open_cards.length === 2) {
      setTimeout(checkMatched, 1000);
    }
  }

  const handleReset = () => {
    setState({
      open_cards: [],
      matched_cards: [],
      moves: 0,
    });
  }

  const cards = [
    {id: 1, image: "/Images/1.png", value: 1},
    {id: 2, image: "/Images/2.png", value: 2},
    {id: 3, image: "/Images/3.png", value: 3},
    {id: 4, image: "/Images/4.png", value: 4},
    {id: 5, image: "/Images/5.png", value: 5},
    {id: 6, image: "/Images/6.png", value: 6},
    {id: 7, image: "/Images/7.png", value: 7},
    {id: 8, image: "/Images/8.png", value: 8},
    {id: 9, image: "/Images/1.png", value: 1},
    {id: 10, image: "/Images/2.png", value: 2},
    {id: 11, image: "/Images/3.png", value: 3},
    {id: 12, image: "/Images/4.png", value: 4},
    {id: 13, image: "/Images/5.png", value: 5},
    {id: 14, image: "/Images/6.png", value: 6},
    {id: 15, image: "/Images/7.png", value: 7},
    {id: 16, image: "/Images/8.png", value: 8},
  ]

  return (
    <div className="game-board">
      <h1>Memory Game</h1>
      {
        (state.matched_cards.length === 16) ? <h2>🎉 You Win! 🎉</h2> : null
      }
      <h3>Total moves: {state.moves}</h3>
      <ResetButton reset={handleReset} />
      <div className='card-container'>
      {
        cards.map((data, index) => {
          var isOpen = (state.open_cards.includes(index) || state.matched_cards.includes(index));
          return (
            <Card key={index} index={index} data={data} isOpen={isOpen} handleClick={handleCardClick} />
          )
        })
      }
      </div>
    </div>
  );
}

export default GameBoard;
