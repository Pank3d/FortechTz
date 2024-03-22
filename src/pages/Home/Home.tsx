import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { getPokemon } from "../../shared/api/api";
import { dataInter } from "../../shared/type/type";
import paginationStore from "./Pagination/paginationStore";
import Pagination from "./Pagination/Pagination";
import "./Home.scss";
import Linkkk from "./Link";
import MyLoader from "../../shared/Skeleton/Skeleton";

const Home: React.FC = observer(() => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState<dataInter[] | undefined>();
  const [numberOfPoke, setNumberOfPoke] = useState<number>();
  const limit = paginationStore.itemsPerPage;
  const offset = (paginationStore.currentPage - 1) * limit;
  const [allPoke, setAllPoke] = useState<dataInter[] | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<
    dataInter[] | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    navigate("/home/1");
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await getPokemon(offset, limit);
        setPokemons(response?.results);
        setNumberOfPoke(response?.count);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchDataAll = async () => {
      try {
        const response = await getPokemon(0, 1302);
        setAllPoke(response?.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    fetchDataAll();
  }, [page, limit, offset]);

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    paginationStore.setItemsPerPage(newLimit);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    setTimeout(() => {
      filterPokemons(value);
    }, 500);
  };

  const filterPokemons = (value: string) => {
    const filtered = allPoke?.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  const filteredPokemonsPaginated = filteredPokemons?.slice(
    offset,
    offset + limit
  );

  const totalPokemonsCount =
    searchTerm !== "" ? filteredPokemons?.length : numberOfPoke || 0;

  return (
    <main className="main_container">
      <div className="inputAndLabel">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Pokemon"
          className="search_input"
        />
        <div className="limitChange">
          <label htmlFor="limit">Items per page:</label>
          <select id="limit" value={limit} onChange={handleLimitChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
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
        ) : searchTerm !== "" ? (
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
            (searchTerm !== ""
              ? filteredPokemons?.length ?? 0
              : numberOfPoke ?? 0) / limit
          )} currentPage={paginationStore.currentPage}        />
      </div>
    </main>
  );
});

export default Home;
