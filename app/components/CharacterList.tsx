"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import CharacterCard from "./CharacterCard";
import Header from "./Header";
import { fetchCharacters } from "../api";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  useEffect(() => {
    async function getCharacters() {
      try {
        setLoading(true);
        const data = await fetchCharacters(page);
        setCharacters(data["results"]);
        setMaxPage(data["info"]["pages"]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    }
    getCharacters();
  }, [page, maxPage]);

  return (
    <div className="container">
      <Header headerContent="Rick and Morty Character" />
      <div className="character-feed-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          characters.map(({ id, name, image }) => (
            <CharacterCard
              key={`${name}_${id}`}
              id={id}
              name={name}
              image={image}
            />
          ))
        )}
      </div>
      <div className="pagination">
        <Pagination
          count={maxPage}
          onChange={(event: React.ChangeEvent<unknown>, value: number) => {
            setPage(value);
          }}
        />
      </div>
    </div>
  );
};

export default CharacterList;
