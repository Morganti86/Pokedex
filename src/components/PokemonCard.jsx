"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function PokemonCard({ pokemon, index }) {
  const cardRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current?.getBoundingClientRect();
        const visible =
          rect?.bottom >= window.innerHeight / 20 &&
          rect?.top <= window.innerHeight / 1.2;
        setIsVisible(visible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      cardRef.current.classList.add("appear");
    } else {
      cardRef.current.classList.remove("appear");
    }
  }, [isVisible]);

  useEffect(() => {
    const rect = cardRef.current.getBoundingClientRect();
    const visible = rect.top <= window.innerHeight / 1;
    setIsVisible(visible);
  }, []);

  return (
    <div className="pokemonCard" ref={cardRef}>
      <Link href="/pokemon/[name]" as={`/pokemon/${pokemon.name}`}>
        <Image
          className="pokemonImage"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
          }.svg`}
          alt={`${pokemon.name} image`}
          width="100"
          height="100"
        />
        <h3 className="pokemonName">{pokemon.name}</h3>
      </Link>
    </div>
  );
}
