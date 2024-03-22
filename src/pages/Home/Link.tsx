import { useState, useEffect } from "react";
import { getPokemonPhoto } from "../../shared/api/api";
import { Link } from "react-router-dom";

const Linkkk = ({ pokemon }: { pokemon: string }) => {
  const [photoUrl, setPhotoUrl] = useState<string>("");
  console.log(photoUrl);

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
      <p>{pokemon}</p>
      {photoUrl && <img src={photoUrl} alt="" className="imgOnHome" />}
    </Link>
  );
};

export default Linkkk;
