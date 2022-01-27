import logo from './logo.svg';
import './App.css';

function App() {
  const numberOfButtons = 100;

  // https://bost.ocks.org/mike/shuffle/
  function shuffleNumbers(numOfButtons) {
    //populate numbers array
    const array = [];
    for (let i = 0; i < numOfButtons; i++) {
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
  const numbers = shuffleNumbers(numberOfButtons);
  const buttons = numbers.map((number) => <button>{number}</button>);

  return <div>{buttons}</div>;
}

export default App;
