import { useGetData } from "../../src/data/hooks";
import { GetServerSideProps } from "next";
import { EventDetails } from "../../src/components/Details/EventDetails";

const Events = (data) => {
  return (
    <>
      <EventDetails data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId(
    "events",
    context.query.id
  );
  return { props: data.data };
};

export default Events;
