import axios from "axios";

const base_url = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (offset: number, limit: number) => {
  try {
    const response = await axios.get(base_url, {
      params: {
        offset,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonInfo = async(name:string) => {
  try {
    const response = await axios.get(`${base_url}/${name}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}



export const getPokemonPhoto = async (name: string) => {
  try {
    const response = await axios.get(`${base_url}/${name}`);
    return response.data.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
};







