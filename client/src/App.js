import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React from 'react';

import AddFilm from './components/AddFilm';
import NavBar from './components/NavBar';
import Register from "./components/Register"
import ViewGenre from "./components/ViewGenre"
import ViewFilm from "./components/ViewFilm"
import EditFilm from "./components/EditFilm"
import Login from './components/Login';



function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <NavBar />
            <Routes>
               <Route path="/films/Action" element={<ViewGenre genre={"action"} />} />
               <Route path="/films/Anime" element={<ViewGenre genre={"anime"} />} />
               <Route path="/films/Bollywood" element={<ViewGenre genre={"bollywood"} />} />
               <Route path="/films/Comedy" element={<ViewGenre genre={"Comedy"} />} />
               <Route path="/films/Crime_Noir" element={<ViewGenre genre={"crimeNoir"} />} />
               <Route path="/films/Documentary" element={<ViewGenre genre={"documentary"} />} />
               <Route path="/films/Drama" element={<ViewGenre genre={"drama"} />} />
               <Route path="/films/Family" element={<ViewGenre genre={"family"} />} />
               <Route path="/films/French_Cinema" element={<ViewGenre genre={"frenchCinema"} />} />
               <Route path="/films/Horror" element={<ViewGenre genre={"horror"} />} />
               <Route path="/films/Horror_Comedy" element={<ViewGenre genre={"horrorComedy"} />} />
               <Route path="/films/Kung_fu" element={<ViewGenre genre={"kungfu"} />} />
               <Route path="/films/Romcom" element={<ViewGenre genre={"romcom"} />} />
               <Route path="/films/Sci_Fi" element={<ViewGenre genre={"sciFi"} />} />
               <Route path="/films/Silent_Movie" element={<ViewGenre genre={"silentMovie"} />} />
               <Route path="/films/Thriller" element={<ViewGenre genre={"thriller"} />} />
               <Route path="/" element={<Register />} />
               <Route path="/films" element={<AddFilm />} />
               <Route path="/film/:id" element={<ViewFilm />} />
               <Route path="/update/:id" element={<EditFilm />} />
               <Route path="/login" element={<Login />} />


            </Routes>
         </BrowserRouter>

      </div>
   );
}

export default App;
