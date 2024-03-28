import {  useState } from "react";
import { PokemonFilterResult, dataInter } from "../../../shared/type/type";


const usePokemonFilter = (
  offset: number,
  limit: number,
  allPoke?: dataInter[]
): PokemonFilterResult => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<dataInter[]>();
  const [filteredPokemonsCount, setFilteredPokemonsCount] = useState<
    number | undefined
  >();
 
  console.log(filteredPokemonsCount);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    setTimeout(() => {
      filterPokemons(value);
    }, 500);
  };

  const filterPokemons = (value: string) => {
    const filtered = allPoke?.filter((pokemon) =>
      pokemon.name?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPokemonsCount(filtered?.length);
    setFilteredPokemons(filtered);
  };

  const filteredPokemonsPaginated = filteredPokemons?.slice(
    offset,
    offset + limit
  );

  return {
    filteredPokemons,
    filteredPokemonsPaginated,
    handleSearchChange,
    searchTerm,
    filteredPokemonsCount,
    setSearchTerm,
  };
};

export default usePokemonFilter;
