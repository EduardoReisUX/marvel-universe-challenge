import { AppBar, Typography } from "@mui/material";
import Link from "next/link";
import { NavBarContainer } from "./styles";

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <Typography variant="h6" component="div">
          <Link href="/">Characters</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link href="/comics">Comics</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link href="/events">Events</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link href="/series">Series</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link href="/stories">Stories</Link>
        </Typography>
      </NavBarContainer>
    </>
  );
};
