import { useState, useEffect } from "react";
import { getPokemonPhoto } from "../../../shared/api/api";
import { Link } from "react-router-dom";

const LinkPokemon = ({ pokemon }: { pokemon?: string }) => {
  const [photoUrl, setPhotoUrl] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchPhoto = async () => {
      try {
        if (pokemon !== undefined) {
          const url = await getPokemonPhoto(pokemon, signal);
          setPhotoUrl(url);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhoto();

    return () => {
      abortController.abort();
    };
  }, [pokemon]);

  return (
    <Link className="link" to={`/pokemonPage/${pokemon}`}>
      <p className="pokemom_p">{pokemon}</p>
      {photoUrl && <img src={photoUrl} alt="" className="imgOnHome" />}
    </Link>
  );
};

export default LinkPokemon;
