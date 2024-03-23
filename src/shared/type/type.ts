import { Dispatch, SetStateAction } from "react";

export interface PokInter {
  counnt: number;
  next: string;
  previos: string | null;
  results: dataInter;
}

export interface dataInter {
  name: string;
  url: string;
}

export interface PokeInfoInter {
  weight: number;
  height: number;
  id: number;
  order: number
  name: string;
  sprites: ImgInter;
  base_experience: number;
}

export interface ImgInter {
  back_default: string |  undefined;
  back_female: string |  undefined;
  back_shiny: string | undefined;
  back_shiny_female: string | undefined;
  front_default: string |  undefined;
  front_female: string |  undefined;
  front_shiny: string |  undefined;
  front_shiny_female:string |  undefined;
}

export interface PokemonFilterResult {
  filteredPokemons: dataInter[] | undefined;
  filteredPokemonsPaginated: dataInter[] | undefined;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string | undefined;
}

export interface SearchInputProps {
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LinmitProps {
  value: number | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface fetchInterProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  offset: number;
  limit: number;
  setPokemons: React.Dispatch<React.SetStateAction<dataInter[] | undefined>>;
  setNumberOfPoke: React.Dispatch<React.SetStateAction<number | undefined>>; 
  setAllPoke: React.Dispatch<React.SetStateAction<dataInter[] | undefined>>;
  page: string | undefined;
}

export interface PokeInfoProps {
  weight: number | undefined;
  height: number | undefined;
  id: number | undefined;
  name: string | undefined;
  base_experience: number | undefined;
}