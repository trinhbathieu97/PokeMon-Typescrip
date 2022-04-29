import React from "react";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import PokemonConnext from "./component/PokemonConnext";

interface Pokemons {
  name: string;
  url: string;
}
export interface Pokemon {
  id: number;
  name: string;
  abilities?: {
    name: string;
    ability: string;
  }[];

  sprites: {
    front_default: string;
  };
}
export interface Detail {
  id: number;
  isOpenned: boolean;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [viewDetail, setViewDetail] = useState<Detail>({
    id: 0,
    isOpenned: false,
  });
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );
      setNextUrl(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  const nextPage = async () => {
    setLoading(true);
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
    });
    setLoading(false);
  };
  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonConnext
          pokemons={pokemons}
          viewDetail={viewDetail}
          setViewDetail={setViewDetail}
        />
        <div className="btn">
          <button onClick={nextPage}>{loading ? "loading ..." : "remo"}</button>
        </div>
      </div>
    </div>
  );
};

export default App;
