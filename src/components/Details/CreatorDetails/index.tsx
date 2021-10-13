import { Card, CardContent, CardMedia, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "next/link";

interface dataProps {
  id: number;
  firstName: string;
  thumbnail: {
    path: string;
    extension: string;
  };

  comics: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
  };

  stories: {
    available: number;
    items: {
      resourceURI: string;
      name: string;
    }[];
  }[];

  events: {
    available: number;
    items: {
      resourceURI: string;
      name: string;
    }[];
  }[];

  series: {
    available: number;
    items: {
      resourceURI: string;
      name: string;
    }[];
  }[];
}

export const CreatorDetails = (data: { data: { results: Object[] } }) => {
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
              {detailsData.firstName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              All the creators doesn't have any description about them, so
              here's just a simple text explaining this.
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "25%" }}
          image={`${detailsData.thumbnail.path}.${detailsData.thumbnail.extension}`}
          alt={`${detailsData.firstName}`}
        />
      </Card>

      <Typography variant="h6">
        Comics ({detailsData.comics.available})
      </Typography>
      {detailsData.comics.available === 0 ? (
        <Typography gutterBottom>
          {detailsData.firstName} doesn't have any comics registered in Marvel's
          API...
        </Typography>
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

      <Typography variant="h6">
        Stories ({detailsData.stories.available})
      </Typography>
      {detailsData.stories.available === 0 ? (
        <Typography gutterBottom>
          {detailsData.firstName} doesn't have any stories with his name...
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
          {detailsData.firstName} doesn't participated at any events...
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
