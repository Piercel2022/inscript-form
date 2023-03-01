import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import myImage from './images/image01.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img className="photo"  src={myImage} alt="" />
    <div className="flexContainer">
    <section> <h1>Loveworld Strasbourg</h1> 
    <div>vous invite à découvrir ses différents clubs de lecture</div></section>
    <div>Club adulte, les mardis 16h - 17h30 et les jeudis 16h30 - 18h00</div>
    <div>Teevo club pour Ados, les samedis 15h30 - 17h00</div>
    <div>Club Jeunes lecteurs, les mercredis 15h00 - 17h00</div>
    <div>Participation volontaire de 10 EUR / mois</div>
    <div>Lieu des clubs: Local Loveworld Strasbourg, rue des acacias, 67370 Pfulgriesheim</div>
    <div>Inscription surplace</div>
    </div>
    <App />
  </React.StrictMode>
);

