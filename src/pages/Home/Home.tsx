import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite"; 
import paginationStore from "../../shared/store/paginationStore";
import { getPokemon } from "../../shared/api/api";
import Pagination from "./Pagination";
import { dataInter } from "../../shared/type/type";

const Home: React.FC = observer(() => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState<dataInter[] | undefined>();
  const [numberOfPoke, setNumberOfPoke] = useState<number>();
  const limit = paginationStore.itemsPerPage;
  const offset = (paginationStore.currentPage - 1) * limit; 

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

    fetchData();
  }, [page, limit, offset]);

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    paginationStore.setItemsPerPage(newLimit);
    navigate(`/home/1`);
  };

  return (
    <div>
      <div>
        <label htmlFor="limit">Items per page:</label>
        <select id="limit" value={limit} onChange={handleLimitChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      {pokemons &&
        pokemons.map((pokemon, index) => (
          <div key={index}>
            <p>{pokemon.name}</p>
          </div>
        ))}
      <Pagination
        totalPages={Math.ceil((numberOfPoke || 0) / limit)}
        currentPage={parseInt(page || "1", 10)}
      />
    </div>
  );
});

export default Home;
