import Image from "next/image";
import Link from "next/link";

const fetchAllPokemon = (offset) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=151`
  ).then((res) => res.json());
};

export async function ListOfPokemon() {
  const allPokemon = await fetchAllPokemon(0);

  return (
    <div className="container">
      <div className="pokemonList">
        {allPokemon.results.map((pokemon, index) => (
          <div className="card" key={index + 1}>
            <div className="pokemonCard">
              <Link href="/pokemon/[name]" as={`/pokemon/${pokemon.name}`}>
                <h3 className="pokemonName">{pokemon.name}</h3>

                <Image
                  className="pokemonImage"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    index + 1
                  }.svg`}
                  alt={pokemon.name}
                  width="100"
                  height="100"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
