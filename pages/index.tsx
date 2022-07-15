import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Button,
  CardActions,
  Box,
  Grid,
} from "@mui/material";
import { Recipe } from "../src/interfaceTS/interface";
import { useRouter } from "next/router";

const QUERY = gql`
  query GetRecipes {
    getRecipes {
      id
      name
      description
      imageUrl
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const { data, loading, error } = useQuery(QUERY);

  if (error) return;
  if (loading) return "Loading";

  return (
    <Container>
      <Grid container spacing={6} sx={{ mt: 12 }}>
        {data.getRecipes.map((recipe: Recipe, i: number) => {
          return (
            <Grid item xs={4}>
              <Card
                sx={{
                  maxWidth: 300,
                }}
              >
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
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      router.push({
                        pathname: `/recipe-details/${recipe.id}`,
                      });
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
