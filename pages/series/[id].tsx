import { useGetData } from "../../src/data/hooks";
import { GetServerSideProps } from "next";
import { SerieDetails } from "../../src/components/Details/SerieDetail";

const Series = (data) => {
  return (
    <>
      <SerieDetails data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId(
    "series",
    context.query.id
  );

  return { props: data.data };
};

export default Series;
