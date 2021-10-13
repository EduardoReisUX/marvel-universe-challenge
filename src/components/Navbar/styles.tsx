import { styled } from "@mui/system";
import { Container } from "@mui/material";

export const NavBarContainer = styled(Container)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: `1rem`,
  paddingBottom: `1rem`,
});
