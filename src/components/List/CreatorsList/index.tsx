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
  firstName: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const CreatorsList = (data: { results?: dataProps[] }) => {
  return (
    <>
      <ListContainer>
        <Typography variant="h3" gutterBottom sx={{ marginTop: 2 }}>
          Creators
        </Typography>
      </ListContainer>
      <ListContainer>
        {data.results !== undefined
          ? data.results.map(({ id, firstName, thumbnail }) => (
              <Card
                key={id}
                sx={{
                  width: 207,
                  marginRight: 2,
                  marginLeft: 2,
                  marginBottom: 4,
                  marginTop: 4,
                }}
              >
                <CardActionArea>
                  <Link href="/creators/[id]" as={`/creators/${id}`}>
                    <CardMedia
                      key={id}
                      component="img"
                      height="194"
                      image={`${thumbnail.path}.${thumbnail.extension}`}
                      alt={firstName}
                    />
                  </Link>
                </CardActionArea>

                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    {firstName}
                  </Typography>
                </CardContent>

                <CardActions sx={{ alignSelf: "flex-end" }}>
                  <Button size="small">
                    <Link href="/creators/[id]" as={`/creators/${id}`}>
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
