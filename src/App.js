import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Movies from './routes/Movies';
import Contact from './routes/Contact';
import Detail from './routes/Detail';
import Genres from './routes/Genres';
import Rating from './routes/Rating';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/movie/:chill" element={ <Detail />} />
        <Route path="/" element= { <Home /> } />
        <Route path="/movies" element= { <Movies /> } />
        <Route path="/about" element= { <About /> } />
        <Route path="/contact" element= { <Contact /> } />
        <Route path="/movies/genres" element= { <Genres /> } />
        <Route path="/movies/rating" element= { <Rating /> } />
      </Routes>
    </Router>
  );
}

export default App;
