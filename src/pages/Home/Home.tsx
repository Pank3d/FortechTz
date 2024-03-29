import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { dataInter } from "../../shared/type/type";
import paginationStore from "../../app/store/paginationStore";
import Pagination from "./Pagination/Pagination";
import "./Home.scss";
import MyLoader from "../../shared/Skeleton/Skeleton";
import { handleLimitChange } from "../../shared/utilsFotHomePage";
import usePokemonFilter from "./Search/UseFilter";
import SearchInput from "./Search/SearchInput";
import { LimitChange } from "./Pagination/LimitChange/LimitChange";
import { useFetch } from "../../shared/api/UseFetch/UseFetch";
import LinkPokemon from "../../entities/Pokemon/PokemonLink/Link";
import toast, { Toaster } from "react-hot-toast";

const Home: React.FC = observer(() => {
  const { page } = useParams();
  const [pokemons, setPokemons] = useState<dataInter[]>();
  const [numberOfPoke, setNumberOfPoke] = useState<number>();
  const limit: number = paginationStore.itemsPerPage;
  const offset: number = (paginationStore.currentPage - 1) * limit;
  const [allPoke, setAllPoke] = useState<dataInter[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [displayedPokemons, setDisplayedPokemons] = useState<dataInter[]>(); // Новое состояние

  useEffect(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    paginationStore.setCurrentPage(savedPage ? parseInt(savedPage, 10) : 1);

    const savedLimit = sessionStorage.getItem("limit");
    if (savedLimit) {
      paginationStore.setItemsPerPage(parseInt(savedLimit, 10));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "currentPage",
      paginationStore.currentPage.toString()
    );
  }, [paginationStore.currentPage]);

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

  const { filteredPokemons, handleSearchChange, searchTerm} =
    usePokemonFilter(offset, limit, allPoke);


    useEffect(() => {
      if (searchTerm !== '' && displayedPokemons === filteredPokemons && filteredPokemons?.length === 0) {
           toast.error("Nothing was found for your request");
      }
    })

  useEffect(() => {
    if (searchTerm === "") {
      setDisplayedPokemons(pokemons);
    } else {
      setDisplayedPokemons(filteredPokemons);
    }
  }, [pokemons, filteredPokemons, searchTerm]);

  return (
    <main className="main_container">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="inputAndLabel">
        <SearchInput onChange={handleSearchChange} value={searchTerm} />
        <LimitChange onChange={handleLimitChange} value={limit} />
      </div>
      <div className="content_container">
        {loading ? (
          <div className="pokemons">
            {[...Array(limit)].map((_, index) => (
              <MyLoader key={index} />
            ))}
          </div>
        ) : (
          <div className="pokemons">
            {displayedPokemons?.map((pokemon, index) => (
              <LinkPokemon key={index} pokemon={pokemon.name} />
            ))}
          </div>
        )}

        <Pagination
          totalPages={Math.ceil(
            ((searchTerm === "" ? numberOfPoke : filteredPokemons?.length) ??
              0) / limit
          )}
          currentPage={paginationStore.currentPage}
        />
      </div>
    </main>
  );
});

export default Home;
