import Image from "next/image";
import { Strenght } from "@/components/Costants";
const fetchPokemon = async (name) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await res.json();
};

export default async function Pokemon({ params }) {
  const { name } = params;
  const pokemonSingle = await fetchPokemon(name);

  const ids = pokemonSingle.id;
  const type = pokemonSingle.types.map((type) => {
    return (
      <span key={type.type.name} className={"style" + " " + type.type.name}>
        {" "}
        {type.type.name}{" "}
      </span>
    );
  });
  const abilities = pokemonSingle.abilities.map((ability) => {
    return (
      <span key={ability.ability.name} className="style black">
        {" "}
        {ability.ability.name}{" "}
      </span>
    );
  });
  const height = pokemonSingle.height;
  const weight = pokemonSingle.weight;
  let stats = {
    hp: pokemonSingle.stats[0].base_stat,
    attack: pokemonSingle.stats[1].base_stat,
    defence: pokemonSingle.stats[2].base_stat,
    specialattack: pokemonSingle.stats[3].base_stat,
    specialdefense: pokemonSingle.stats[4].base_stat,
    speed: pokemonSingle.stats[5].base_stat,
  };

  const getBarColor = (stat) => {
    if (stat < Strenght.weak) {
      return "weak";
    }
    if (stat < Strenght.normal) {
      return "normal";
    }
    if (stat < Strenght.strong) {
      return "strong";
    }
    return "superb";
  };

  return (
    <div className="card" key={ids}>
      <h1 className="pokemonName">{name}</h1>
      <div className="container">
        <div className="p1">
          <Image
            className="pokemonImage"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ids}.svg`}
            alt={name}
            width="350"
            height="350"
            placeholder="blur"
            blurDataURL={"../pokeball2.png"}
          />
        </div>
        <div className="p1">
          <div className="pokemonInfo">
            <h3>
              <span className="underline">Type:</span> {type}
            </h3>
            <h3>
              <span className="underline">Abilities:</span> {abilities}
            </h3>
            <h3>
              <span className="underline">Height:</span> {height} m
            </h3>
            <h3>
              <span className="underline">Weight:</span> {weight} kg
            </h3>
            <h3>
              <span className="underline">Base Stats:</span>{" "}
              {stats.hp +
                stats.attack +
                stats.defence +
                stats.specialattack +
                stats.specialdefense +
                stats.speed}
            </h3>
          </div>
          <div className="table">
            <div className="tableDescription">
              <div className="tableStats">
                <h4>HP:</h4>
                <h4>{stats.hp}</h4>
              </div>
              <div className="tableStats">
                <h4>ATTACK:</h4>
                <h4>{stats.attack}</h4>
              </div>
              <div className="tableStats">
                <h4>DEFENCE:</h4>
                <h4>{stats.defence}</h4>
              </div>
              <div className="tableStats">
                <h4>SPECIAL ATTACK:</h4>
                <h4>{stats.specialattack}</h4>
              </div>
              <div className="tableStats">
                <h4>SPECIAL DEFENCE:</h4>
                <h4>{stats.specialdefense}</h4>
              </div>
              <div className="tableStats">
                <h4>SPEED:</h4>
                <h4>{stats.speed}</h4>
              </div>
            </div>
            <div className="tableSideBar">
              <div
                style={{ width: stats.hp }}
                className={"strength" + " " + getBarColor(stats.hp)}></div>
              <div
                style={{ width: stats.attack }}
                className={"strength" + " " + getBarColor(stats.attack)}></div>
              <div
                style={{ width: stats.defence }}
                className={"strength" + " " + getBarColor(stats.defence)}></div>
              <div
                style={{ width: stats.specialattack }}
                className={
                  "strength" + " " + getBarColor(stats.specialattack)
                }></div>
              <div
                style={{ width: stats.specialdefense }}
                className={
                  "strength" + " " + getBarColor(stats.specialdefense)
                }></div>
              <div
                style={{ width: stats.speed }}
                className={"strength" + " " + getBarColor(stats.speed)}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
