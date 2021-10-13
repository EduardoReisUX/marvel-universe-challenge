import { Typography } from "@mui/material";
import { HeaderContainer } from "./styles";

const Header: React.FC = ({ ...props }) => {
  return (
    <HeaderContainer>
      <Typography
        variant="h1"
        sx={{
          paddingTop: 8,
          paddingBottom: 8,
          textAlign: "center",
        }}
      >
        Marvel Universe
      </Typography>
      {props.children}
    </HeaderContainer>
  );
};

export default Header;
