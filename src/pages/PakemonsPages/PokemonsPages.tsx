import { useEffect, useState } from "react";
import { getPokemonInfo } from "../../shared/api/api";
import { PokeInfoInter } from "../../shared/type/type";
import { useParams } from "react-router-dom";
import Swiper from "../../shared/swiper/Swiper";
import "./PokemonPages.scss";
import PokemonInfo from "./PokemonInfo/PokemonInfo";

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
      <PokemonInfo
        weight={pokeInfo?.weight}
        height={pokeInfo?.height}
        id={pokeInfo?.id}
        name={pokeInfo?.name}
        base_experience={pokeInfo?.base_experience}
      />
    </div>
  );
};

export default PokemonsPages;
