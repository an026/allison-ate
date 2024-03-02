import React from 'react';
import './Card.css';

const Card = ({ title, content, image, link }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{content}</p>
        {link && (
          <a href={link} className="card-button" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
