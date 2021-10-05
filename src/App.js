import './App.css';
import ChosenGif from './components/ChosenGif';
import RandomGif from './components/RandomGif';

function App() {
  return (
    <div className="App">
        <h1>GIF App</h1>
        <div>
          <RandomGif />
          <ChosenGif />
        </div>
    </div>
  );
}

export default App;
