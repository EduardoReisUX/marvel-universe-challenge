import Header from "../../src/components/Header";
import { useGetData } from "../../src/data/hooks";
import { NavBar } from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import { Container } from "@mui/material";
import { CharacterDetails } from "../../src/components/Details/CharacterDetails";
import { GetServerSideProps } from "next";

const Detail = (data) => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
        <CharacterDetails data={data} />
      </Container>
      <Footer />
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
