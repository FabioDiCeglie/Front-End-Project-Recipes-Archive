import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import { Recipe } from "../../src/interfaceTS/interface";
import { useRouter } from "next/router";

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
  console.log(data);

  return <Container sx={{ mt: 12 }}></Container>;
}
