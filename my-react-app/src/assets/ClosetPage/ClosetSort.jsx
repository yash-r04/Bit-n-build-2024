import React, { useState } from 'react';
import FavClo from './assets/FavShirt.jpg';
import FavClo1 from './assets/tshirt.jfif';
import FavClo2 from './assets/Sweater.jpg';
import FavClo3 from './assets/Tshirt2.jfif';
import FavClo4 from './assets/Chinos3.jfif';
import FavClo5 from './assets/jeans.jpg';
import FavClo6 from './assets/Jacket.jpg';
import FavClo7 from './assets/hoodie.jfif';
import FavClo8 from './assets/ShirtFormal.png';

function ClosetSort() {
  const [closet, setCloset] = useState({
    cloth: 'Cotton',
    type: 'Formal',
    color: 'Blue',
  });

  const [filteredCards, setFilteredCards] = useState([]);

  const cards = [
    { id: 'Denim', image: FavClo, title: 'Denim', text: 'Blue Denim Shirt' },
    { id: 'Cotton', image: FavClo2, title: 'Sweater', text: 'Violet Sweater' },
    { id: 'Cotton', image: FavClo1, title: 'Tshirt', text: 'Blue Shirt' },
    { id: 'Cotton', image: FavClo3, title: 'Tshirt', text: 'Green Shirt' },
    { id: 'Denim', image: FavClo4, title: 'Chinos', text: 'Multi-color Chinos' },
    { id: 'Denim', image: FavClo5, title: 'Jeans', text: 'Blue Denim Jeans' },
    { id: 'Nylon', image: FavClo6, title: 'Jacket', text: 'Black Jacket' },
    { id: 'Cotton', image: FavClo7, title: 'Hoodie', text: 'Black hoodie' },
    { id: 'Cotton', image: FavClo8, title: 'Shirt Formal', text: 'White Formal Shirt' },
  ];

  function handleSortChange() {
    const sortedCards = cards.filter(card => card.id === closet.cloth);
    setFilteredCards(sortedCards);
  }

  function handleClothChange(event) {
    setCloset((c) => ({ ...c, cloth: event.target.value }));
  }

  function handleTypeChange(event) {
    setCloset((c) => ({ ...c, type: event.target.value }));
  }

  function handleColorChange(event) {
    setCloset((c) => ({ ...c, color: event.target.value }));
  }

  return (
    <div>
      <div className="closet-container">
        <select value={closet.cloth} onChange={handleClothChange}>
          <option value="">Select an Option</option>
          <option value="Cotton">Cotton</option>
          <option value="Silk">Silk</option>
          <option value="Nylon">Nylon</option>
          <option value="Denim">Denim</option>
        </select>
        <br />
        <select value={closet.type} onChange={handleTypeChange}>
          <option value="">Select an Option</option>
          <option value="Formal">Formal</option>
          <option value="Ethnic">Ethnic</option>
          <option value="Casual">Casual</option>
        </select>
        <br />
        <input type="text" value={closet.color} onChange={handleColorChange} placeholder="Color" />
        <br />
      </div>
      <p className="choice">
        Your Chosen attire is: {closet.cloth} {closet.type} {closet.color}
      </p>
      <button className="find" onClick={handleSortChange}>Find</button>
      <br />
      <div className="card-container">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div className="card" key={index}>
              <img className="card-image" src={card.image} alt={card.title} />
              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>
            </div>
          ))
        ) : (
          cards.map((card, index) => (
            <div className="card" key={index}>
              <img className="card-image" src={card.image} alt={card.title} />
              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ClosetSort;
