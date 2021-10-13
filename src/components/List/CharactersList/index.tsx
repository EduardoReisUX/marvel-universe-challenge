import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  CardActionArea,
  CircularProgress,
} from "@mui/material";

import Link from "next/link";

import { ListContainer } from "../styles";

interface dataProps {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const CharactersList = (data: { results?: dataProps[] }) => {
  return (
    <>
      <ListContainer>
        <Typography variant="h3" gutterBottom sx={{ marginTop: 2 }}>
          Characters
        </Typography>
      </ListContainer>
      <ListContainer>
        {data.results !== undefined
          ? data.results.map(({ id, name, description, thumbnail }) => (
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
            ))
          : `${JSON.stringify(data.results)}`}
      </ListContainer>
    </>
  );
};
