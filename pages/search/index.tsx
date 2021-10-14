import { useState } from "react";
import Link from "next/link";

import { Button, Container, Typography } from "@mui/material";
import SearchComponent from "../../src/components/Search";

const Search = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ marginTop: 2 }}>
          Pesquise pela API
        </Typography>
        <SearchComponent
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        {!loading ? (
          <Link href="/search/[query]" as={`/search/${query}`}>
            <Button
              variant="contained"
              onClick={(event) => setLoading(true)}
              sx={{
                width: "100%",
                paddingTop: 2,
                paddingRight: 4,
                paddingBottom: 2,
                paddingLeft: 4,
              }}
            >
              Pesquisar
            </Button>
          </Link>
        ) : (
          <Button
            disabled={loading}
            variant="outlined"
            sx={{
              width: "100%",
              paddingTop: 2,
              paddingRight: 4,
              paddingBottom: 2,
              paddingLeft: 4,
            }}
          >
            Pesquisando dados pela API...
          </Button>
        )}
      </Container>
    </>
  );
};

export default Search;
