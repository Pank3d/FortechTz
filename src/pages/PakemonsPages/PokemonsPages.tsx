import { useEffect, useState } from "react";
import { getPokemonInfo } from "../../shared/api/api";
import { PokeInfoInter } from "../../shared/type/type";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swiper from "../../shared/swiper/Swiper";
import "./PokemonPages.scss";
import PokemonInfo from "../../entities/Pokemon/PokemonInfo/PokemonInfo";
import paginationStore from "../../app/store/paginationStore";

const PokemonsPages = () => {
  const [pokeInfo, setPokeInfo] = useState<PokeInfoInter>();
  const { pokemonName } = useParams();
  const abortController = new AbortController();
  const signal = abortController.signal;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokeInfo = async () => {
      try {
        if (pokemonName) {
          const response = await getPokemonInfo(pokemonName, signal);
          setPokeInfo(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokeInfo();
  }, []);

  const handleBackToPage = () => {
    navigate(`/home/${paginationStore.currentPage}`);
    console.log(paginationStore.currentPage)
  };

  return (
    <div className="PokemonsPageContainer">
      <button className="button_back" onClick={handleBackToPage}>
        Back to page
      </button>
      <Swiper
        backDefault={pokeInfo?.sprites.back_default}
        backFemale={pokeInfo?.sprites.back_female}
        backShinyFemale={pokeInfo?.sprites.back_shiny_female}
        frontDefault={pokeInfo?.sprites.front_default}
        frontFemale={pokeInfo?.sprites.front_female}
        frontShiny={pokeInfo?.sprites.front_shiny}
        frontShinyFemale={pokeInfo?.sprites.front_shiny_female}
      />
      <PokemonInfo
        weight={pokeInfo?.weight}
        height={pokeInfo?.height}
        id={pokeInfo?.id}
        name={pokeInfo?.name}
        baseExperience={pokeInfo?.baseExperience}
      />
    </div>
  );
};

export default PokemonsPages;
 

