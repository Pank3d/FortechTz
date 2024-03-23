import { lazy, Suspense } from "react";
import Header from "../shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Home = lazy(() => import("../pages/Home/Home"));
const PokemonsPages = lazy(
  () => import("../pages/PakemonsPages/PokemonsPages")
);

function App() {
  return (
    <section className="wrapper">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:page" element={<Home />} />
          <Route path="/pokemonPage/:pokemonName" element={<PokemonsPages />} />
        </Routes>
      </Suspense>
      <Footer />
    </section>
  );
}

export default App;
