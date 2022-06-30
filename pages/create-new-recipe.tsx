import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function CreateNewRecipe() {
  const [image, setImage] = useState();
  const [nameRecipe, setNameRecipe] = useState("");
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

  const handleChangeRecipe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameRecipe(event.target.value);
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
        onChange={handleChangeRecipe}
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
        label="Description"
        value={descriptionRecipe}
        onChange={handleChangeDescription}
        sx={{ mt: 10 }}
      />
      <input type="file" onChange={uploadImage} style={{ marginTop: 20 }} />
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
