import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { getPokemon } from "../../shared/api/api";
import { dataInter } from "../../shared/type/type";
import paginationStore from "./Pagination/paginationStore";
import Pagination from "./Pagination/Pagination";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemon(offset, limit);
        setPokemons(response?.results);
        setNumberOfPoke(response?.count);
      } catch (error) {
        console.log(error);
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

    // Установка задержки перед фильтрацией и обновлением результатов
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

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Pokemon by name"
        />
        <label htmlFor="limit">Items per page:</label>
        <select id="limit" value={limit} onChange={handleLimitChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      {searchTerm !== "" ? (
        <>
          {filteredPokemonsPaginated?.map((pokemon, index) => (
            <div key={index}>
              <p>{pokemon.name}</p>
            </div>
          ))}
          <Pagination
            totalPages={Math.ceil((filteredPokemons?.length || 0) / limit)}
            currentPage={parseInt(page || "1", 10)}
          />
        </>
      ) : (
        <>
          {pokemons?.map((pokemon, index) => (
            <div key={index}>
              <p>{pokemon.name}</p>
            </div>
          ))}
          <Pagination
            totalPages={Math.ceil((numberOfPoke || 0) / limit)}
            currentPage={parseInt(page || "1", 10)}
          />
        </>
      )}
    </div>
  );
});

export default Home;
