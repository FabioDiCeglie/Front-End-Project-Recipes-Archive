import { gql, useMutation } from "@apollo/client";
import { Container, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";

const CREATE_NEW_RECIPE = gql`
  mutation Mutation($recipeInput: RecipeInput) {
    createRecipe(recipeInput: $recipeInput) {
      id
    }
  }
`;

export default function CreateNewRecipe() {
  const [image, setImage] = useState("");
  const [nameRecipe, setNameRecipe] = useState("");
  const [ingredientsRecipe, setIngredientsRecipe] = useState("");
  const [descriptionRecipe, setDescriptionRecipe] = useState("");

  const [createRecipe] = useMutation(CREATE_NEW_RECIPE);

  const submitForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    createRecipe({
      variables: {
        recipeInput: {
          name: nameRecipe,
          description: descriptionRecipe,
          imageUrl: image,
          ingredients: ingredientsRecipe,
        },
      },
    });
    setImage("");
    setNameRecipe("");
    setIngredientsRecipe("");
    setDescriptionRecipe("");
  };

  const uploadImage = async (e: any) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "qmlqhgyk");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dnjicmmbn/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.url); //put the url in local state, next step you can send it to the backend
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionRecipe(event.target.value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameRecipe(event.target.value);
  };

  const handleChangeIngredients = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIngredientsRecipe(event.target.value);
  };

  return (
    <Container sx={{ mt: 14 }}>
      <Grid container spacing={10}>
        <Grid item xs={10}>
          <TextField
            required
            label="Name Recipe"
            value={nameRecipe}
            onChange={handleChangeName}
            sx={{ width: "30%" }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            multiline
            label="Description"
            value={descriptionRecipe}
            onChange={handleChangeDescription}
            sx={{ width: "90%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            multiline
            label="Ingredients"
            value={ingredientsRecipe}
            onChange={handleChangeIngredients}
            sx={{ width: "90%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={uploadImage} />
          </Button>
        </Grid>
        <Grid item xs={7}>
          <img
            src={
              image
                ? image
                : "https://clippingpathgreat.com/wp-content/uploads/2021/04/upload-files.jpg"
            }
            alt="Upload"
            style={{ width: 200 }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" onClick={submitForm}>
            Create
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
