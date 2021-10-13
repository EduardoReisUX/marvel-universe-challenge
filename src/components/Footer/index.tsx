import { Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const Footer = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        textAlign: "center",
        backgroundColor: red[200],
      }}
    >
      Created by Dudu for the Pedido Pago Challenge.
    </Typography>
  );
};

export default Footer;
