import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { Recipe } from "../../src/interfaceTS/interface";
import { useRouter } from "next/router";
import Image from "next/image";

const QUERY = gql`
  query Recipe($id: ID!) {
    recipe(ID: $id) {
      name
      description
      imageUrl
      ingredients
    }
  }
`;

export default function RecipeDetails() {
  const router = useRouter();
  const { data, loading, error } = useQuery(QUERY, {
    variables: { id: `${router.query.id}` },
  });

  if (error) return;
  if (loading) return "Loading";
  const recipe = data.recipe;

  return (
    <Container>
      <Grid container spacing={4} sx={{ mt: 12 }}>
        <Grid item xs={4}>
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            width={300}
            height={300}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" sx={{ mt: 5 }}>
            👨‍🍳 {recipe.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 5 }}>
            Ingredients:
            <br />
            {recipe.ingredients}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1" sx={{ mt: 5 }}>
            Description:
            <br />
            {recipe.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
