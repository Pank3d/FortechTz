import {  PokeInfoProps } from "../../../shared/type/type";

const PokemonInfo = ({
  id,
  name,
  weight,
  height,
  base_experience,
}: PokeInfoProps) => {
  return (
    <div className="infoOfPokemon">
      <p className="id">Pokemons ID: {id}</p>
      <p className="name">Pokemon Name: {name}</p>
      <p className="weight">Pokemon weight: {weight}</p>
      <p className="height">Pokemon height: {height}</p>
      <p className="baseExpirience">
        Pokemon Base Expirience: {""}
        {base_experience}
      </p>
    </div>
  );
};

export default PokemonInfo