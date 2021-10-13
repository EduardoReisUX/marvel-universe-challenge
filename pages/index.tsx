import { CharactersList } from "../src/components/List/CharactersList";
import { Container } from "@mui/material";

import type { GetServerSideProps, NextPage } from "next";
import { useGetData } from "../src/data/hooks/index";

const Home: NextPage = (data: { results: [] }) => {
  const axiosFetchResults = data.results;

  return <CharactersList results={axiosFetchResults} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId("characters");
  return {
    props: data.data,
  };
};

export default Home;
