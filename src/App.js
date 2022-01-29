import './css/App.css';
import Game from './components/Game';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Game numberOfButtons={101} />
    </>
  );
}

export default App;
