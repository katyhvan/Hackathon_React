import React from "react";
import { useClothes } from "../../contexts/ClothesContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import Like from "../Like/Like";

import "../../styles/ClothesCard.css";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ClothesCard = ({ item }) => {
  const navigate = useNavigate();

  const { deleteClothe } = useClothes();
  const { addClotheToCart } = useCart();

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            className="card-image"
            component="img"
            alt="clothe image"
            height="350"
            image={item.img}
          />
          <CardContent>
            <div className="card-like">
              <Typography
                className="card-title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {item.title}
              </Typography>
              <Like />
            </div>
            <Typography
              variant="body1"
              color="text.secondary"
              className="card-body"
            >
              <strong>$ {item.price}</strong>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-body card-desc"
            >
              {item.desc}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-body"
            >
              <i>Type: {item.type}</i>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-body"
            >
              <i>Category: {item.category}</i>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="btn-details"
              size="small"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              Details
            </Button>
            <Button
              className="btn-edit"
              size="small"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
            <Button
              className="btn-delete"
              size="small"
              onClick={() => deleteClothe(item.id)}
            >
              Delete
            </Button>
            <Button
              className="btn-cart"
              size="small"
              onClick={() => addClotheToCart(item)}
            >
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ClothesCard;
