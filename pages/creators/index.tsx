import { GetServerSideProps } from "next";

import { CreatorsList } from "../../src/components/List/CreatorsList";
import { useGetData } from "../../src/data/hooks";

const Creators = (data: { results: [] }) => {
  const axiosFetchResults = data.results;

  return (
    <>
      <CreatorsList results={axiosFetchResults} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId("creators");
  return {
    props: data.data,
  };
};

export default Creators;
