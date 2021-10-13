import Header from "../../src/components/Header";
import { useGetData } from "../../src/data/hooks";
import { NavBar } from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import { Container } from "@mui/material";
// import { Details } from "../../src/components/Details";

import { GetServerSideProps } from "next";

const Comics = (data) => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
        {JSON.stringify(data)}
      </Container>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getDataById } = useGetData();

  const data: { data: {} } = await getDataById("comics", context.query.id);
  return { props: data.data };
};

export default Comics;
