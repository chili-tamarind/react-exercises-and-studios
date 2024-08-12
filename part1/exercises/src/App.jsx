import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';
import HobbyList from './components/HobbyList.jsx';

function App() {
  return (
    <div className="App">
      <ChoresList />
      <hr style={{ height:"3px", border:"none", backgroundColor:"#f2b948"}} />
      <div className="similarComponents">
        <MovieList />
        <BookList />
        <HobbyList />
      </div>
    </div>
  );
}

export default App;
