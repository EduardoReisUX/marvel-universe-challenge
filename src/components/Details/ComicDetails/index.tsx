import { Card, CardContent, CardMedia, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "next/link";

interface dataProps {
  id: number;
  title: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };

  characters: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
  };

  stories: {
    name: string;
    available: number;
    items: {
      resourceURI: string;
      name: string;
    }[];
  }[];

  events: {
    name: string;
    available: number;
    items: {}[];
  }[];
}

export const ComicDetails = (data: { data: { results: Object[] } }) => {
  const detailsData: dataProps = data.data.results[0];
  console.log(detailsData);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          marginTop: 4,
          marginBottom: 3,
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" gutterBottom>
              {detailsData.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {!detailsData.description
                ? "This character, sadly, doesn't have any description about him on Marvel's API. You can check the list of comics, series, events the he/she participated down below."
                : detailsData.description}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "25%" }}
          image={`${detailsData.thumbnail.path}.${detailsData.thumbnail.extension}`}
          alt={`${detailsData.title}`}
        />
      </Card>

      <Typography variant="h6">
        Characters ({detailsData.characters.available})
      </Typography>
      {detailsData.characters.available === 0 ? (
        <Typography gutterBottom>
          {detailsData.title} doesn't have any characters registered in Marvel's
          API...
        </Typography>
      ) : (
        detailsData.characters.items.map(({ resourceURI, name }) => (
          <List>
            <ListItem key={resourceURI.match(/\d+$/)[0]}>
              <Link
                href="/detail/[id]"
                as={`/detail/${resourceURI.match(/\d+$/)[0]}`}
              >
                {name}
              </Link>
            </ListItem>
          </List>
        ))
      )}

      <Typography variant="h6">
        Stories ({detailsData.stories.available})
      </Typography>
      {detailsData.stories.available === 0 ? (
        <Typography gutterBottom>
          {detailsData.title} isn't included in any stories...
        </Typography>
      ) : (
        detailsData.stories.items.map(({ resourceURI, name }) => (
          <List>
            <ListItem key={resourceURI.match(/\d+$/)[0]}>
              <Link
                href="/stories/[id]"
                as={`/stories/${resourceURI.match(/\d+$/)[0]}`}
              >
                {name}
              </Link>
            </ListItem>
          </List>
        ))
      )}

      <Typography variant="h6">
        Events ({detailsData.events.available})
      </Typography>
      {detailsData.events.available === 0 ? (
        <Typography gutterBottom>
          {detailsData.title} isn't included at any events...
        </Typography>
      ) : (
        detailsData.events.items.map(({ resourceURI, name }) => (
          <List>
            <ListItem key={resourceURI.match(/\d+$/)[0]}>
              <Link
                href="/events/[id]"
                as={`/events/${resourceURI.match(/\d+$/)[0]}`}
              >
                {name}
              </Link>
            </ListItem>
          </List>
        ))
      )}
    </>
  );
};
