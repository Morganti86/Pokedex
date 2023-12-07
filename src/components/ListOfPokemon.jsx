import { PokemonCard } from "./PokemonCard";

const fetchAllPokemon = (offset) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=151`
  ).then((res) => res.json());
};

export async function ListOfPokemon() {
  const allPokemon = await fetchAllPokemon(0);

  return (
    <section className="container">
      <div className="pokemonList">
        {allPokemon.results.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} index={index} />
        ))}
      </div>
    </section>
  );
}
