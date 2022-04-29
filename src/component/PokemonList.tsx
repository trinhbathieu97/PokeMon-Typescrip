import React, { useEffect, useState } from "react";
import { Detail } from "../App";

interface Iprops {
  name: string;
  id: number;
  image: string;
  abilities?:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonList = ({
  name,
  id,
  image,
  abilities,
  viewDetail,
  setViewDetail,
}: Iprops) => {
  const [isSelected, setSelected] = useState<Boolean>(false);
  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);

  return (
    <div>
      <section className="pokemon-list-container">
        <p className="pokemon-name">{name}</p>
        <img src={image} alt="" />
        <div className="detail-skil1">
          <p className="detail-ability"> Abilities:</p>
          {abilities?.map((skill: any) => {
            return <div>{skill.ability.name}</div>;
          })}
        </div>
      </section>
    </div>
  );
};

export default PokemonList;
//  const { name, id, image, abilities, viewDetail,setDetail }
// const [isSelected, setSelected] = useState(false);
// useEffect(()=>{
// - props;
// setSelected(id === viewDetail?.id);
// . [viewDetail])
// return (
// <div className="">
// <section className="pokemon-1list-container">
// <p className="pokemon-name"> {name} </p>
// <img src={image} alt="pokemon" />
// <div className="detail-skill">
// <p className="detail-ability"> Abilities:</p>
// {abilities?. map((ab: any) => {
// return <div className=""> {ab.ability.name}</div>;
