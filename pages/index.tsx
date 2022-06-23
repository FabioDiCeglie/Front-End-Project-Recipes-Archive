import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

interface Recipe {
  name: String;
  description: String;
}

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

  console.log(data.getRecipes);
  return (
    <div>
      <Button>Hello</Button>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image="" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.getRecipes.map((recipe: Recipe) => recipe.name)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.getRecipes.map((recipe: Recipe) => recipe.description)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
