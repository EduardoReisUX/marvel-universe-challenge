import { useGetData } from "../../src/data/hooks";
import { GetServerSideProps } from "next";
import { CreatorDetails } from "../../src/components/Details/CreatorDetails";

const Creators = (data) => {
  return <CreatorDetails data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId(
    "creators",
    context.query.id
  );
  return { props: data.data };
};

export default Creators;
