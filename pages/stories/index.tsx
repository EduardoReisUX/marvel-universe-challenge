import { GetServerSideProps } from "next";

import { StoriesList } from "../../src/components/List/StoriesList";
import { useGetData } from "../../src/data/hooks";

const Stories = (data: { results: [] }) => {
  const axiosFetchResults = data.results;

  return <StoriesList results={axiosFetchResults} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId("stories");
  return {
    props: data.data,
  };
};

export default Stories;
