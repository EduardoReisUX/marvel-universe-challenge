import { Typography } from "@mui/material";
import { HeaderContainer } from "./styles";
import { NavBar } from "../Navbar";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Typography
        variant="h3"
        sx={{
          paddingTop: 4,
          paddingBottom: 4,
          textAlign: "center",
        }}
      >
        Marvel Universe
      </Typography>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
