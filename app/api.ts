const baseURL = "https://rickandmortyapi.com/api/character/?page=";

export const fetchCharacters = async (page: number) => {
  try {
    const response = await fetch(`${baseURL}${page}`);
    const data = await response.json();
    console.log(`data retrieved ${data}`);
    return data;
  } catch (error) {
    throw error;
  }
};
