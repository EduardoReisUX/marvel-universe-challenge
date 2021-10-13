import { useGetData } from "../../src/data/hooks";
import { GetServerSideProps } from "next";
import { ComicDetails } from "../../src/components/Details/ComicDetails";

const Comics = (data) => {
  return (
    <>
      <ComicDetails data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId(
    "comics",
    context.query.id
  );
  return { props: data.data };
};

export default Comics;
