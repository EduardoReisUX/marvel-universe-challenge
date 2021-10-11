import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";

interface dataProps {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const List = (data: { results: dataProps[] }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.results !== undefined
        ? data.results.map(({ id, name, description, thumbnail }) => (
            <Card key={id} sx={{ maxWidth: 207, margin: 2, height: 627 }}>
              <CardHeader title={name} subheader="" />
              <CardMedia
                component="img"
                height="194"
                image={`${thumbnail.path}.${thumbnail.extension}`}
                alt={name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <Box sx={{ lineHeight: 2 }}>
                    {!description
                      ? "This character doesn't have a description"
                      : description}
                  </Box>
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <IconButton arial-label="add to favorites">❤</IconButton>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          ))
        : `${JSON.stringify(data.results)}`}
    </Container>
  );
};
