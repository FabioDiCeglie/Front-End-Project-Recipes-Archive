import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Stack,
  Toolbar,
  InputBase,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavigationBar() {
  return (
    <AppBar position="fixed" elevation={0} style={{ background: "#2E3B55" }}>
      <Toolbar>
        <Container>
          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            spacing={1}
          >
            <Link href="/">
              <Button
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "monospace",
                }}
              >
                Recipes
              </Button>
            </Link>
            <Link href="/create-new-recipe">
              <Button
                component="div"
                sx={{
                  flexGrow: 0.1,
                  display: { xs: "none", sm: "block" },
                  color: "white",
                }}
              >
                Create New Recipe
              </Button>
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search???"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
