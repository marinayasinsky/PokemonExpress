const React = require('react');
const pokemon = require('../models/pokemon');

const Show = ({ pokemon }) => {
  return (
    <div>
        <h1>See All The Pokemon!</h1>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img + '.jpg'} alt={pokemon.name} />
      <a href="/pokemon">Back to Index</a>
    </div>
  );
};

module.exports = Show;
