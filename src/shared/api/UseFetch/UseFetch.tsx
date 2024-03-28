import { useEffect } from "react";
import { fetchInterProps } from "../../type/type";
import { getPokemon } from "../api";

export const useFetch = ({
  setLoading,
  offset,
  limit,
  setPokemons,
  setNumberOfPoke,
  setAllPoke,
  page,
}: fetchInterProps) => {
  useEffect(() => {
    setLoading(true);

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await getPokemon(offset, limit, signal);
        setPokemons(response?.results);
        if (response?.count) {
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
        const response = await getPokemon(0, 1302, signal);
        setAllPoke(response?.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    fetchDataAll();

    return () => {
      abortController.abort();
    };
  }, [page, limit, offset, setLoading, setPokemons, setNumberOfPoke, setAllPoke]);
};
