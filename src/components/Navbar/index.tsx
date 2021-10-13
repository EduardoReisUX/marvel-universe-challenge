import Link from "next/link";
import { NavBarContainer } from "./styles";

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <Link href="/">Characters</Link>
        <Link href="/comics">Comics</Link>
        <Link href="/creators">Creators</Link>
        <Link href="/events">Events</Link>
        <Link href="/series">Series</Link>
        <Link href="/stories">Stories</Link>
      </NavBarContainer>
    </>
  );
};
