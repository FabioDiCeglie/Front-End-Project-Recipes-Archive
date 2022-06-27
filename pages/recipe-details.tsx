import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import { Recipe } from "../src/interfaceTS/interface";

const QUERY = gql`
  query GetRecipes {
    getRecipes {
      name
      description
      imageUrl
    }
  }
`;

export default function RecipeDetails() {
  const { data, loading, error } = useQuery(QUERY);

  if (error) return;
  if (loading) return "Loading";

  return (
    <Container sx={{ mt: 12 }}>
      {data.getRecipes.map((recipe: Recipe, i: number) => {
        return (
          <Container sx={{ mt: 6 }}>
            <Card sx={{ maxWidth: 300 }} key={i}>
              <CardMedia
                component="img"
                height="140"
                // @ts-ignore
                image={recipe.imageUrl}
                alt={recipe.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.description}
                </Typography>
              </CardContent>
            </Card>
          </Container>
        );
      })}
    </Container>
  );
}
