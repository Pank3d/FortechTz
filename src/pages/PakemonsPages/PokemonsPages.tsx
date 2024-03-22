import { useEffect, useState } from "react";
import { getPokemonInfo } from "../../shared/api/api";
import { PokeInfoInter } from "../../shared/type/type";
import { useParams } from "react-router-dom";
import Swiper from "../../shared/swiper/Swiper";
import "./PokemonPages.scss"

const PokemonsPages = () => {
  const [pokeInfo, setPokeInfo] = useState<PokeInfoInter | undefined>();
  const { pokemonName } = useParams();

  useEffect(() => {
    const fetchPokeInfo = async () => {
      try {
        if (pokemonName !== undefined) {
          const response = await getPokemonInfo(pokemonName);
          setPokeInfo(response);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokeInfo();
  }, [pokemonName]);

  return (
    <div className="PokemonsPageContainer">
      <Swiper
        back_default={pokeInfo?.sprites.back_default}
        back_female={pokeInfo?.sprites.back_female}
        back_shiny={pokeInfo?.sprites.back_shiny}
        back_shiny_female={pokeInfo?.sprites.back_shiny_female}
        front_default={pokeInfo?.sprites.front_default}
        front_female={pokeInfo?.sprites.front_female}
        front_shiny={pokeInfo?.sprites.front_shiny}
        front_shiny_female={pokeInfo?.sprites.front_shiny_female}
      />
      <div className="infoOfPokemon">
        <p className="id">
          Pokemons ID:{" "}
          {pokeInfo?.id}
        </p>
        <p className="name">
          Pokemon Name:{" "}
          {pokeInfo?.name}
        </p>
        <p className="weight">
          Pokemon weight:{" "}
          {pokeInfo?.weight}
        </p>
        <p className="height">
          Pokemon height:{" "}
          {pokeInfo?.height}
        </p>
        <p className="baseExpirience">Pokemon Base Expirience: {""}
        {pokeInfo?.base_experience}
        </p>
      </div>
    </div>
  );
};

export default PokemonsPages;
