import { Container, TextField } from "@mui/material";
import React from "react";

const SearchComponent: React.FC = (props) => {
  return (
    <>
      <TextField
        label="Pesquisar..."
        placeholder="Pesquise por um heroi, comic ou criador. Ex.: Spider-Man, The Infinity Glove ou Stan Lee."
        type="search"
        variant="outlined"
        sx={{ marginBottom: 2, minWidth: "100%" }}
        {...props}
      />
    </>
  );
};

export default SearchComponent;
