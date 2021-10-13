import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

import Link from "next/link";

import { ListContainer } from "../styles";

interface dataProps {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const EventsList = (data: { results?: dataProps[] }) => {
  return (
    <>
      <ListContainer>
        <Typography variant="h3" gutterBottom sx={{ marginTop: 2 }}>
          Events
        </Typography>
      </ListContainer>
      <ListContainer>
        {data.results !== undefined
          ? data.results.map(({ id, title, description, thumbnail }) => (
              <Card
                key={id}
                sx={{
                  maxWidth: 207,
                  marginRight: 2,
                  marginLeft: 2,
                  marginBottom: 4,
                  marginTop: 4,
                }}
              >
                <CardActionArea>
                  <Link href="/comics/[id]" as={`/comics/${id}`}>
                    <CardMedia
                      key={id}
                      component="img"
                      height="194"
                      image={`${thumbnail.path}.${thumbnail.extension}`}
                      alt={title}
                    />
                  </Link>
                </CardActionArea>

                <CardContent sx={{ height: 132 }}>
                  <Typography variant="body1" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {!description
                      ? "This event doesn't have a description."
                      : `${description.split(" ").slice(0, 11).join(" ")}...`}
                  </Typography>
                </CardContent>

                <CardActions sx={{ alignSelf: "flex-end" }}>
                  <Button size="small">
                    <Link href="/events/[id]" as={`/events/${id}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            ))
          : `${JSON.stringify(data.results)}`}
      </ListContainer>
    </>
  );
};
