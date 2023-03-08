import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <Card sx={{ maxWidth: 300 }} className="postCard">
      <CardMedia
        sx={{ height: 200 }}
        image={item.picture}
        title={item.name}
        className="post-card"
      />
      <CardContent>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="subtitle1" className="name">
              {item.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              <b>Category:</b> {item.type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {item.price}$
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className="description">
              {item.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          sx={{
            color: "red",
            ":hover": {
              bgcolor: "error.main",
              color: "white",
              border: "1px solid red", // добавлено для изменения обводки
            },
            border: "1px solid red", // добавлено для изменения обводки
          }}
          onClick={() => deleteProduct(item.id)}
        >
          Delete
        </Button>

        <Button
          size="outlined"
          variant="text"
          sx={{
            color: "purple",
            ":hover": {
              bgcolor: "secondary.main",
              color: "white",
              border: "1px solid purple", // добавлено для изменения обводки
            },
            border: "1px solid purple", // добавлено для изменения обводки
          }}
          onClick={() => navigate(`/details/${item.id}`)}
        >
          Details
        </Button>

        <Button
          size="small"
          variant="outlined"
          sx={{
            color: "green",
            ":hover": {
              bgcolor: "success.main",
              color: "white",
              border: "1px solid green", // добавлено для изменения обводки
            },
            border: "1px solid green", // добавлено для изменения обводки
          }}
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
