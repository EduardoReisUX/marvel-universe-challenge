import { GetServerSideProps } from "next";

import { SeriesList } from "../../src/components/List/SeriesList";
import { useGetData } from "../../src/data/hooks";

const Series = (data: { results: [] }) => {
  const axiosFetchResults = data.results;

  return <SeriesList results={axiosFetchResults} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId("series");
  return {
    props: data.data,
  };
};

export default Series;
