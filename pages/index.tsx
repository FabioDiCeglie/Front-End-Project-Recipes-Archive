import { useQuery, gql } from "@apollo/client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Recipe } from "../src/interfaceTS/interface";

const QUERY = gql`
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

  return (
    <div>
      {data.getRecipes.map((recipe: Recipe, i: number) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={i}>
            <CardMedia component="img" height="140" image="" alt="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
