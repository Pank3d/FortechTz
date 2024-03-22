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
  order: number;
  is_default: boolean;
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

