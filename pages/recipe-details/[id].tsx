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
  console.log(recipe);
  return (
    <Grid container spacing={4} sx={{ mt: 12, ml: 12 }}>
      <Grid item xs={4}>
        <img src={recipe.imageUrl} alt={recipe.name} width={300} height={300} />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h5" sx={{ mt: 5 }}>
          {recipe.name}
        </Typography>
        <Typography variant="h5" sx={{ mt: 5 }}>
          {recipe.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
