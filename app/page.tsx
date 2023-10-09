"use client";
import React, { useEffect, useState } from "react";
import { fetchCharacters } from "./api";
import CharacterList from "./CharacterList";

const Home: React.FC = () => {
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    async function getMaxPage() {
      try {
        const data = await fetchCharacters(1);
        setMaxPage(data["info"]["pages"]);
      } catch (error) {
        console.error("Error fetching max Page data:", error);
      }
    }
    getMaxPage();
  }, []);

  return <CharacterList maxPage={maxPage} />;
};

export default Home;
