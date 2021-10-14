import { useGetData } from "../../src/data/hooks";

import { AllList } from "../../src/components/List/AllList";
import { GetServerSideProps } from "next";

const Detail = (data) => {
  return (
    <>
      <AllList data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getAllByName } = useGetData();

  const data: Object = await getAllByName(context.query.query);
  return { props: data };
};

export default Detail;
