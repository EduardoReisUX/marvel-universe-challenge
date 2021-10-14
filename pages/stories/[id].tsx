import { useGetData } from "../../src/data/hooks";
import { GetServerSideProps } from "next";
import { StoryDetails } from "../../src/components/Details/StoryDetails";

const Series = (data) => {
  return (
    <>
      <StoryDetails data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId(
    "stories",
    context.query.id
  );

  return { props: data.data };
};

export default Series;
