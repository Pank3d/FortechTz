import axios from "axios";

const baseUrl: string = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (
  offset: number,
  limit: number,
  signal: AbortSignal
) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        offset,
        limit,
      },
      signal: signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPokemonInfo = async (name: string, signal: AbortSignal) => {
  try {
    const response = await axios.get(`${baseUrl}/${name}`, {
      signal: signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPokemonPhoto = async (name: string, signal: AbortSignal) => {
  try {
    const response = await axios.get(`${baseUrl}/${name}`, {
      signal: signal,
    });
    return response.data.sprites.front_default;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
