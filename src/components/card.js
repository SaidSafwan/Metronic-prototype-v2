import React from 'react';

const Card = ({ image, title, address, area, beds, rating, price, location }) => (
  <div className="cards">
    <div className="card-left">
      <img className="aprt-images" src={image} alt="resident" />
    </div>
    <div className="card-right">
      <div className="img-title">
        <div className="add-tag">
          <i className="fa-solid fa-magnifying-glass"></i>
          <a href="#">{title}</a>
        </div>
        <img src="./icons/icons-heart.svg" className="like-icon" alt="heart-icon" />
      </div>
      <p className="aprt-info">{address}</p>
      <div className="cards-icons">
        <img src="./icons/icons-stretch-tool.svg" alt="icon" /><span>{area}</span>
        <img src="./icons/icons-single-bed.svg" alt="icon" /><span>{beds}</span>
        <img src="./icons/icons-the-flash-sign.svg" style={{ width: '24px' }} alt="icon" /><span>{rating}</span>
      </div>
      <h2 className="price-tag">{price}</h2>
      <div className="location-tag">
        <a href="#">{location}</a>
      </div>
    </div>
  </div>
);

export default Card;
