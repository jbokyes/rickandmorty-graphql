import { useQuery, gql } from "@apollo/client";
const CHARACTERS_QUERY = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;

type character = {
  id: string;
  name: string;
  image: string;
};

function App() {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <pre>{error.message}</pre>;
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Rick and Morty Characters
      </h1>
      <ul>
        {data.characters.results.map((character: character) => (
          <div>
            <li className="text-3xl underline" key={character.id}>
              {character.name}
            </li>
            <li key={character.name}>
              <img src={character.image} alt={character.name} />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
