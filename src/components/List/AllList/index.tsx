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
  name: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const AllList = (data: { data: { results?: dataProps[] } }) => {
  return (
    <>
      <ListContainer>
        <Typography variant="h3" gutterBottom sx={{ marginTop: 2 }}>
          Characters
        </Typography>
      </ListContainer>
      <ListContainer>
        {data.data.characters.data.results !== undefined
          ? data.data.characters.data.results.map(
              ({ id, name, description, thumbnail }) => (
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
                    <Link href="/detail/[id]" as={`/detail/${id}`}>
                      <CardMedia
                        key={id}
                        component="img"
                        height="194"
                        image={`${thumbnail.path}.${thumbnail.extension}`}
                        alt={name}
                      />
                    </Link>
                  </CardActionArea>

                  <CardContent sx={{ height: 132 }}>
                    <Typography variant="body1" gutterBottom>
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {!description
                        ? "This character doesn't have a description."
                        : `${description.split(" ").slice(0, 11).join(" ")}...`}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ alignSelf: "flex-end" }}>
                    <Button size="small">
                      <Link href="/detail/[id]" as={`/detail/${id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              )
            )
          : `${JSON.stringify(data.data.characters.data.results)}`}
      </ListContainer>

      <Typography
        variant="h3"
        gutterBottom
        sx={{ marginTop: 4, textAlign: "center" }}
      >
        Comics
      </Typography>
      <ListContainer>
        {data.data.comics.data.results !== undefined
          ? data.data.comics.data.results.map(
              ({ id, title, description, thumbnail }) => (
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
                        ? "This comic doesn't have a description."
                        : `${description.split(" ").slice(0, 11).join(" ")}...`}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ alignSelf: "flex-end" }}>
                    <Button size="small">
                      <Link href="/comics/[id]" as={`/comics/${id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              )
            )
          : `${JSON.stringify(data.data.comics.data.results)}`}
      </ListContainer>

      <ListContainer>
        <Typography variant="h3" gutterBottom sx={{ marginTop: 2 }}>
          Events
        </Typography>
      </ListContainer>
      <ListContainer>
        {data.data.events.data.results !== undefined
          ? data.data.events.data.results.map(
              ({ id, title, description, thumbnail }) => (
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
                    <Link href="/events/[id]" as={`/events/${id}`}>
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
              )
            )
          : `${JSON.stringify(data.data.events.data.results)}`}
      </ListContainer>
    </>
  );
};
