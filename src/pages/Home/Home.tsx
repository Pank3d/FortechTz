import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { dataInter } from "../../shared/type/type";
import paginationStore from "./Pagination/paginationStore";
import Pagination from "./Pagination/Pagination";
import "./Home.scss";
import Linkkk from "./utils/Link";
import MyLoader from "../../shared/Skeleton/Skeleton";
import { handleLimitChange } from "./utils/utilsFotHomePage";
import usePokemonFilter from "./utils/Search/UseFilter";
import SearchInput from "./utils/Search/SearchInput";
import { LimitChange } from "./utils/LimitChange/LimitChange";
import { useFetch } from "./utils/UseFetch/UseFetch";

const Home: React.FC = observer(() => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState<dataInter[] | undefined>();
  const [numberOfPoke, setNumberOfPoke] = useState<number | undefined>(undefined);
  const limit = paginationStore.itemsPerPage;
  const offset = (paginationStore.currentPage - 1) * limit;
  const [allPoke, setAllPoke] = useState<dataInter[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    navigate("/home/1");
  }, []);

  useFetch({
    loading: loading,
    setLoading: setLoading,
    offset: offset,
    limit: limit,
    setPokemons: setPokemons,
    setNumberOfPoke: setNumberOfPoke,
    setAllPoke: setAllPoke,
    page: page,
  });

  const {
    filteredPokemons,
    filteredPokemonsPaginated,
    handleSearchChange,
    searchTerm,
  } = usePokemonFilter(allPoke, offset, limit);

  return (
    <main className="main_container">
      <div className="inputAndLabel">
        <SearchInput onChange={handleSearchChange} value={searchTerm} />
        <LimitChange onChange={handleLimitChange} value={limit} />
      </div>
      <div className="content_container">
        {loading ? (
          <div className="pokemons">
            {[...Array(limit)].map((_, index) => (
              <div key={index}>
                <MyLoader />
              </div>
            ))}
          </div>
        ) : filteredPokemons ? (
          <div className="pokemons">
            {filteredPokemonsPaginated?.map((pokemon, index) => (
              <div key={index}>
                <Linkkk pokemon={pokemon.name} />
              </div>
            ))}
          </div>
        ) : (
          <div className="pokemons">
            {pokemons?.map((pokemon, index) => (
              <div key={index}>
                <Linkkk pokemon={pokemon.name} />
              </div>
            ))}
          </div>
        )}

        <Pagination
          totalPages={Math.ceil(
            (filteredPokemons ? filteredPokemons.length : numberOfPoke ?? 0) /
              limit
          )}
          currentPage={paginationStore.currentPage}
        />
      </div>
    </main>
  );
});

export default Home;
