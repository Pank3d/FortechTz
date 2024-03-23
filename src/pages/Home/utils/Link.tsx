import { useState, useEffect } from "react";
import { getPokemonPhoto } from "../../../shared/api/api";
import { Link } from "react-router-dom";

const LinkPokemon = ({ pokemon }: { pokemon: string }) => {
  const [photoUrl, setPhotoUrl] = useState<string>("");

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const url = await getPokemonPhoto(pokemon);
        setPhotoUrl(url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhoto();
  }, [pokemon]);

  return (
    <Link className="link" to={`/pokemonPage/${pokemon}`}>
      <p className="pokemom_p">{pokemon}</p>
      {photoUrl && <img src={photoUrl} alt="" className="imgOnHome" />}
    </Link>
  );
};

export default LinkPokemon;
