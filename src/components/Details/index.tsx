import { Card, CardContent, CardMedia, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "next/link";

interface dataProps {
  name: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    name: string;
    available: number;
    items: {}[];
  }[];

  series: {
    name: string;
    available: number;
    items: {}[];
  }[];

  stories: {
    name: string;
    available: number;
    items: {}[];
  }[];

  events: {
    name: string;
    available: number;
    items: {}[];
  }[];
}

export const Details = (data: { data: { results: Object[] } }) => {
  const detailsData: dataProps = data.data.results[0];
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
              {detailsData.name}
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
          alt={`${detailsData.name}`}
        />
      </Card>

      <Typography variant="h4" gutterBottom>
        Comics ({detailsData.comics.available})
      </Typography>
      {!detailsData.comics ? (
        <Typography>{detailsData.name} doesn't have any comics...</Typography>
      ) : (
        detailsData.comics.items.map(({ resourceURI, name }) => (
          <List>
            <ListItem key={resourceURI.match(/\d+$/)[0]}>
              <Link
                href="/comics/[id]"
                as={`/comics/${resourceURI.match(/\d+$/)[0]}`}
              >
                {name}
              </Link>
            </ListItem>
          </List>
        ))
      )}

      <Typography variant="h4" gutterBottom>
        Series ({detailsData.series.available})
      </Typography>
      {!detailsData.series ? (
        <Typography>{detailsData.name} doesn't have any series...</Typography>
      ) : (
        detailsData.series.items.map(({ resourceURI, name }) => (
          <List>
            <ListItem key={resourceURI.match(/\d+$/)[0]}>
              <Link
                href="/series/[id]"
                as={`/series/${resourceURI.match(/\d+$/)[0]}`}
              >
                {name}
              </Link>
            </ListItem>
          </List>
        ))
      )}

      <Typography variant="h4" gutterBottom>
        Stories ({detailsData.stories.available})
      </Typography>
      {!detailsData.stories ? (
        <Typography>{detailsData.name} doesn't have any stories...</Typography>
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

      <Typography variant="h4" gutterBottom>
        Events ({detailsData.events.available})
      </Typography>
      {detailsData.events.available === 0 ? (
        <Typography>{detailsData.name} doesn't have any events...</Typography>
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
