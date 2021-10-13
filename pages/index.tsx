//import useSwr from "swr";
import type { GetServerSideProps, NextPage } from "next";
import { red } from "@mui/material/colors";
import { List } from "../src/components/List";

import { useGetData } from "../src/data/hooks/index";
import { useEffect, useState } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Search from "../src/components/Search";
import { NavBar } from "../src/components/Navbar";

// NextJS Fetch
//const searchFetcher = (url) => fetch(url).then((res) => res.json());

const Home: NextPage = (data: { results: [] }) => {
  const axiosFetchResults = data.results;
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [queryResult, setQueryResult] = useState();

  // NextJS Fetch
  /* const { data, error } = useSwr(
    "../src/data/services/api/search",
    searchFetcher
  ); */

  const { searchCharacters } = useGetData();

  const callSearchCharacters = async () => {
    setLoading(true);

    const searchResult = await searchCharacters(query);
    if (!searchResult.error || searchResult === undefined) {
      setQueryResult(searchResult.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (query.length > 0 && query.length % 3 == 0) {
      callSearchCharacters();
    }
  }, [query]);

  return (
    <>
      <Header>
        <NavBar />
        <Search
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </Header>

      <Container maxWidth="lg" sx={{ bgColor: red[100] }}>
        {!loading ? (
          !queryResult ? (
            <List results={axiosFetchResults} />
          ) : (
            <List results={queryResult} />
          )
        ) : (
          <>
            <CircularProgress />
            <Typography variant="h4">Loading...</Typography>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getCharacters } = useGetData();

  const data: { data: {} } = await getCharacters();
  return {
    props: data.data,
  };
};

export default Home;
