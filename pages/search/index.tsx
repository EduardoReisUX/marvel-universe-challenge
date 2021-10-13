import Link from "next/link";

const Search = (query = "testing") => {
  return (
    <>
      <Link href="/">Search</Link>
      <h1>{JSON.stringify(query, null, 2)}</h1>
    </>
  );
};

export default Search;
