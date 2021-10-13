import { Container } from "@mui/material";
import { GetServerSideProps } from "next";

import { ComicsList } from "../../src/components/List/ComicsList";
import { useGetData } from "../../src/data/hooks";

const Comics = (data: { results: [] }) => {
  const axiosFetchResults = data.results;

  return (
    <>
      <ComicsList results={axiosFetchResults} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId("comics");
  return {
    props: data.data,
  };
};

export default Comics;
