import { useQuery, gql } from "@apollo/client";

const QUERY: any = gql`
  query GetRecipes {
    getRecipes {
      name
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(QUERY);

  if (error) return;
  if (loading) return "Loading";

  console.log(data.getRecipes);
  return (
    <div>
      <h1>{data.getRecipes.map((recipe: any) => recipe.name)}</h1>
    </div>
  );
}
