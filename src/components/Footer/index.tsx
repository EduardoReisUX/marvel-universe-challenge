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
        backgroundColor: red[100],
      }}
    >
      {`Feito com ♥ por Eduardo para o desafio do Pedido Pago.
      
      @github: https://github.com/EduardoReisUX/marvel-universe-challenge`}
    </Typography>
  );
};

export default Footer;
