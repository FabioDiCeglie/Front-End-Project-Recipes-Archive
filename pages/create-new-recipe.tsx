import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  TextField,
} from "@mui/material";

export default function CreateNewRecipe() {
  return (
    <Container sx={{ mt: 14 }}>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
    </Container>
  );
}
