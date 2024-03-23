import { useEffect } from "react";
import { fetchInterProps } from "../../../../shared/type/type";
import { getPokemon } from "../../../../shared/api/api";

export const useFetch = ({
  setLoading,
  offset,
  limit,
  setPokemons,
  setNumberOfPoke,
  setAllPoke,
  page,
}:fetchInterProps) => {
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await getPokemon(offset, limit);
        setPokemons(response?.results);
        if (response?.count !== undefined) {
          setNumberOfPoke(response?.count);
        }
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

};

