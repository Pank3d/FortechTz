import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PokemonsPages from "../pages/PakemonsPages/PokemonsPages";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

function App() {
  return (
    <>
      <section className="wrapper">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:page" element={<Home />} />
          <Route path="/pokemonPage/:pokemonName" element={<PokemonsPages />} />
        </Routes>
        <Footer />
      </section>
    </>
  );
}

export default App;
