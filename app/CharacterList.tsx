"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "./api";

interface IProps {
  maxPage?: number;
}

const CharacterList = (props: IProps) => {
  const { maxPage = 1 } = props;

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getCharacters() {
      try {
        setLoading(true);
        const data = await fetchCharacters(page);
        setCharacters(data["results"]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    }
    getCharacters();
  }, [page]);

  return (
    <div className="container">
      <div className="title">Rick and Morty Character Feed</div>
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
