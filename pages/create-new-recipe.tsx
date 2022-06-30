import { useQuery, gql } from "@apollo/client";
import { Container, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function CreateNewRecipe() {
  const [image, setImage] = useState();
  const [nameRecipe, setNameRecipe] = useState("");
  const [ingredientsRecipe, setIngredientsRecipe] = useState("");
  const [descriptionRecipe, setDescriptionRecipe] = useState("");

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
    console.log("file", file); //check if you are getting the url back
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

  function submitForm(event: any) {
    event.preventDefault();
  }

  return (
    <Container sx={{ mt: 14 }}>
      <TextField
        required
        fullWidth
        label="Name Recipe"
        value={nameRecipe}
        onChange={handleChangeName}
      />
      <TextField
        required
        fullWidth
        label="Description"
        value={descriptionRecipe}
        onChange={handleChangeDescription}
        sx={{ mt: 10 }}
      />
      <TextField
        required
        fullWidth
        label="Ingredients"
        value={ingredientsRecipe}
        onChange={handleChangeIngredients}
        sx={{ mt: 10 }}
      />

      <Button variant="contained" component="label" sx={{ mt: 5 }}>
        Upload File
        <input type="file" hidden onChange={uploadImage} />
      </Button>

      <div>
        <img
          src={
            image
              ? image
              : "https://clippingpathgreat.com/wp-content/uploads/2021/04/upload-files.jpg"
          }
          alt="Upload"
          style={{ width: 200 }}
        />
        {image ? (
          <p style={{ fontSize: 20, color: "white" }}>Succesfully uploaded!</p>
        ) : (
          ""
        )}
      </div>

      <Button
        type="submit"
        variant="contained"
        onClick={submitForm}
        sx={{ mt: 10 }}
      >
        Create Recipe
      </Button>
    </Container>
  );
}
