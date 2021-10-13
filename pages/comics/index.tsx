import { Container } from "@mui/material";
import { red } from "@mui/material/colors";
import { GetServerSideProps } from "next";
import Header from "../../src/components/Header";
import { NavBar } from "../../src/components/Navbar";
import { List } from "../../src/components/List";
import { useGetData } from "../../src/data/hooks";

const Comics = (data: { results: [] }) => {
  const axiosFetchResults = data.results;

  return (
    <>
      <Header>
        <NavBar />
      </Header>

      <Container maxWidth="lg" sx={{ bgColor: red[100] }}>
        <List results={axiosFetchResults} />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataByTagAndId } = useGetData();

  const data: { data: {} } = await getDataByTagAndId("comics");
  return {
    props: data.data,
  };
};

export default Comics;
