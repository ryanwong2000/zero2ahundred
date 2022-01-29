import React, { Component } from 'react';
import Button from './Button.js';
import '../css/App.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfButtons: this.props.numberOfButtons,
      numbers: this.shuffleNumbers(this.props.numberOfButtons)
    };
  }

  // https://bost.ocks.org/mike/shuffle/
  //shuffles an array of numbers of size n
  shuffleNumbers(n) {
    //populate numbers array
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }

    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  // numbers = this.shuffleNumbers(this.state.numberOfButtons);

  render() {
    return (
      <div className="game">
        {this.numbers.map((number) => (
          <Button key={number} number={number} />
        ))}
      </div>
    );
  }
}
