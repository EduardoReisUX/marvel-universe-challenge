import Header from "../Header";
import Footer from "../Footer";
import { Button, Container } from "@mui/material";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ minHeight: "71.1vh" }}>
        <div style={{ textAlign: "center" }}>
          <Link href="/search">
            <Button
              variant="contained"
              sx={{
                width: "auto",
                paddingTop: 2,
                paddingRight: 4,
                paddingBottom: 2,
                paddingLeft: 4,
                marginTop: 6,
                marginBottom: 6,
              }}
            >
              Search for characters, comics or events
            </Button>
          </Link>
        </div>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
