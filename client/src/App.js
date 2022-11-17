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
               <Route path="/films/Action" element={<ViewGenre genre={"Action"} />} />
               <Route path="/films/Anime" element={<ViewGenre genre={"Anime"} />} />
               <Route path="/films/Bollywood" element={<ViewGenre genre={"Bollywood"} />} />
               <Route path="/films/Comedy" element={<ViewGenre genre={"Comedy"} />} />
               <Route path="/films/Crime_Noir" element={<ViewGenre genre={"Crime Noir"} />} />
               <Route path="/films/Documentary" element={<ViewGenre genre={"Documentary"} />} />
               <Route path="/films/Drama" element={<ViewGenre genre={"Drama"} />} />
               <Route path="/films/Family" element={<ViewGenre genre={"Family"} />} />
               <Route path="/films/French_Cinema" element={<ViewGenre genre={"French Cinema"} />} />
               <Route path="/films/Horror" element={<ViewGenre genre={"Horror"} />} />
               <Route path="/films/Horror_Comedy" element={<ViewGenre genre={"Horror/Comedy"} />} />
               <Route path="/films/Kung_fu" element={<ViewGenre genre={"Kung-Fu"} />} />
               <Route path="/films/Romcom" element={<ViewGenre genre={"Romcom"} />} />
               <Route path="/films/Sci_Fi" element={<ViewGenre genre={"Sci-Fi"} />} />
               <Route path="/films/Silent_Movie" element={<ViewGenre genre={"Silent Movie"} />} />
               <Route path="/films/Thriller" element={<ViewGenre genre={"Thriller"} />} />
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
