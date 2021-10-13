import { Container } from "@mui/material";
import { CharacterDetails } from "../../src/components/Details/CharacterDetails";

import { useGetData } from "../../src/data/hooks";
import { GetServerSideProps } from "next";

const Detail = (data) => {
  return (
    <>
      <CharacterDetails data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();
  console.log(context);

  const data: { data: {} } = await getDataByTagAndId(
    "characters",
    context.query.id
  );
  return { props: data.data };
};

export default Detail;
