const baseURL = "https://rickandmortyapi.com/api/character/?page=";

export const fetchCharacters = async (pageNumber: number) => {
  try {
    const response = await fetch(`${baseURL}${pageNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
