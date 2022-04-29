import React from "react";
import { Pokemon as Props } from "../App";
import { Detail } from "../App";
import PokemonList from "./PokemonList";
import "./pokemon.css";
interface listProps {
  pokemons: Props[];
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonConnext = ({ pokemons, viewDetail, setViewDetail }: listProps) => {
  const selectPokemon = (id: number) => {
    console.log(id);
  };

  return (
    <div>
      <section className="collection-container">
        {pokemons.map((poke) => (
          <div onClick={() => selectPokemon(poke.id)}>
            <PokemonList
              key={poke.id}
              name={poke.name}
              id={poke.id}
              image={poke.sprites.front_default}
              abilities={poke.abilities}
              viewDetail={viewDetail}
              setViewDetail={setViewDetail}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PokemonConnext;
