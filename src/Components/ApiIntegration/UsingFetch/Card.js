import React from 'react';

function Card({ image, title, description, price }) {
  return (
    <div className='card mb-4' style={{ width: '28rem', height: '28rem' }}>
      <div className='card-heading'>
        <img 
          src={image} 
          className='img-fluid' 
          alt={title} 
          style={{ height: '150px', objectFit: 'cover' }} 
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text' style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '120px' }}>
          {description}
        </p>
        <p className='card-text'><strong>Price: </strong>${price}</p>
      </div>
    </div>
  );
}

export default Card;
