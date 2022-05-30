/* eslint-disable jsx-a11y/img-redundant-alt */
import { display, width } from "@mui/system";
import { useEffect, useState } from "react";
import * as api from "../../api";

export const CharacterList = () => {
  const [characters, setCharacters] = useState<any>([]);
  const [nextListing, setNextListing] = useState<string>("");
  const [prevListing, setPrevListing] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const { info, results: fetchedCharacters } = await api.getAllCharacters();
      setCharacters(fetchedCharacters);
      setNextListing(info.next);
      setPrevListing(info.prev);
    }
    fetchData();
  }, [])

  return (
    <div style={{ 
      padding: "4px", 
      display: 'flex', 
      flexDirection: "column", 
      justifyContent: "space-around",
      alignItems: "center", 
      height: "100vh"
    }}>
      <h1>
        Rick and Morty characters
      </h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "8px",
          listStyleType: "none",
        }}
      >
        {characters.map((character: Record<string, string>) => {
          return (
            <li key={character.id}>
              <img
                src={character.image}
                alt={`${character.name} picture`}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                }}
              />
              <h2>{character.name}</h2>
            </li>
          );
        })}
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {nextListing && (
          <button style={{ justifySelf: "flex-start", width: "120px" }}>
            Previous page
          </button>
        )}

        {nextListing && (
          <button style={{ justifySelf: "flex-end", width: "120px" }}>
            Next page
          </button>
        )}
      </div>
    </div>
  );
}