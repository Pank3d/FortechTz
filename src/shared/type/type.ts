
export interface PokInter {
  counnt: number;
  next: string;
  previos: string | null;
  results: dataInter;
}

export interface dataInter {
  name?: string;
  url?: string;
}

export interface PokeInfoInter {
  weight: number;
  height: number;
  id: number;
  order: number
  name: string;
  sprites: ImgInter;
  baseExperience: number;
}

export interface InterProps {
  backDefault?:string; 
  backFemale?:string ;
  backShiny?:string ;
  backShinyFemale?:string ;
  frontDefault?:string ;
  frontFemale?:string ;
  frontShiny?:string ;
  frontShinyFemale?:string ;
}

export interface ImgInter {
  back_default?: string ;
  back_female?: string ;
  back_shiny?: string ;
  back_shiny_female?: string ;
  front_default?: string ;
  front_female?: string ;
  front_shiny?: string ;
  front_shiny_female?:string; 
}

export interface PokemonFilterResult {
  filteredPokemons?: dataInter[];
  filteredPokemonsPaginated?: dataInter[];
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm?: string;
  filteredPokemonsCount?: number;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchInputProps {
  value?: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LinmitProps {
  value?: number;
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
  page?: string ;
}

export interface PokeInfoProps {
  weight?: number;
  height?: number;
  id?: number;
  name?: string ;
  baseExperience?: number;
}