import React from 'react';

const Card = (props) => {

  const handleClick = () => {
    props.handleClick(props.index);
  }

  return (
    <div className="card" onClick={handleClick}>
      <img alt="Card Image" src={(props.isOpen) ? props.data.image : "/Images/Default.png"} className='card-image'/>
    </div>
  );
}

export default Card;
