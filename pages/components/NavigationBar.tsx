import { AppBar, Container, Stack, Toolbar } from "@mui/material";

export default function NavigationBar() {
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <Container>
          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            spacing={3}
          ></Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
