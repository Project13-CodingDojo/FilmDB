import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import AddFilm from './components/AddFilm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AddFilm/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
