import { useState } from "react";
import { PokemonFilterResult, dataInter } from "../../../../shared/type/type";
const usePokemonFilter = (
  allPoke: dataInter[] | undefined,
  offset: number,
  limit: number
): PokemonFilterResult => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<
    dataInter[] | undefined
  >();

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

  return {
    filteredPokemons,
    filteredPokemonsPaginated,
    handleSearchChange,
    searchTerm,
  };
};

export default usePokemonFilter;
