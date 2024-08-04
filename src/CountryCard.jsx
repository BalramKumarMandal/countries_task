import React from 'react';

const CountryCard = ({ flag, name, alt }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        border: '1px solid black',
        borderRadius: '8px',
        width: '200px',
        height: '200px',
        margin: '10px',
        padding: '10px',
      }}
    >
      <img
        src={flag}
        alt={alt}
        style={{
          width: '100px',
          height: '100px',
        }}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default CountryCard;
