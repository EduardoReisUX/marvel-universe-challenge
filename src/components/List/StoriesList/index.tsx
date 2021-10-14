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

export const StoriesList = (data: { results?: dataProps[] }) => {
  return (
    <>
      <ListContainer>
        <Typography variant="h3" gutterBottom sx={{ marginTop: 2 }}>
          Stories
        </Typography>
      </ListContainer>
      <ListContainer>
        {data.results !== undefined
          ? data.results.map(({ id, title, description }) => (
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
                <CardContent sx={{ height: 200 }}>
                  <Typography variant="body1" gutterBottom>
                    {title}
                  </Typography>
                </CardContent>

                <CardActions sx={{ alignSelf: "flex-end" }}>
                  <Button size="small">
                    <Link href="/stories/[id]" as={`/stories/${id}`}>
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
