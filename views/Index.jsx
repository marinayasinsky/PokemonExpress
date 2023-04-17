const React = require("react");
const pokemon = require("../models/pokemon");

const Index = ({pokemon}) => {
    return (
      <div >
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((pokemon, idx) => (
            <li key={pokemon.name}>
              <a href={`/pokemon/${idx}`}>{pokemon.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Index;
  