import logo from './logo.svg';
import './App.css';

function App() {
  const numberOfButtons = 101;

  // https://bost.ocks.org/mike/shuffle/
  //shuffles an array of numbers of size n
  function shuffleNumbers(n) {
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

  function handleClick(e) {}

  const numbers = shuffleNumbers(numberOfButtons);
  const buttons = numbers.map((number) => <button>{number}</button>);

  return <div className="game">{buttons}</div>;
}

export default App;
