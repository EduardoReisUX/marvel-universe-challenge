import { Container, TextField } from "@mui/material";
import React from "react";

const Search: React.FC = (props) => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <TextField
          label="Pesquisar..."
          placeholder="Pesquise por um herói. Ex.: Spider-Man"
          type="search"
          variant="standard"
          sx={{ marginBottom: 2, minWidth: "50%" }}
          {...props}
        />
      </Container>
    </>
  );
};

export default Search;
