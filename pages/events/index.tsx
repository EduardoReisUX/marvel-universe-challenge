import { GetServerSideProps } from "next";

import { EventsList } from "../../src/components/List/EventsList";
import { useGetData } from "../../src/data/hooks";

const Events = (data: { results: [] }) => {
  const axiosFetchResults = data.results;

  return <EventsList results={axiosFetchResults} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId("events");
  return {
    props: data.data,
  };
};

export default Events;
