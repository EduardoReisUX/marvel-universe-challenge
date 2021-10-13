import { useState, useEffect } from "react";
import Link from "next/link";

import { useGetData } from "../../src/data/hooks";

import { red } from "@mui/material/colors";
import { Button, Container, Typography } from "@mui/material";
import SearchComponent from "../../src/components/Search";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { NavBar } from "../../src/components/Navbar";

const Search = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [queryResult, setQueryResult] = useState();

  const { getDataByTagAndId } = useGetData();

  const callGetDataByTagAndId = async () => {
    setLoading(true);

    const searchResult = await getDataByTagAndId(query);
    if (!searchResult.error || searchResult === undefined) {
      setQueryResult(searchResult.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (query.length > 0 && query.length % 3 == 0) {
      callGetDataByTagAndId();
    }
  }, [query]);

  return (
    <>
      <Header>
        <NavBar />
      </Header>

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
        <Typography variant="h3" gutterBottom sx={{ marginTop: 2 }}>
          Pesquise pela API
        </Typography>
        <SearchComponent
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <Link href="/search/[query]" as={`/search/${query}`}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              paddingTop: 2,
              paddingRight: 4,
              paddingBottom: 2,
              paddingLeft: 4,
            }}
          >
            Search
          </Button>
        </Link>
      </Container>

      <Footer />
    </>
  );
};

export default Search;
