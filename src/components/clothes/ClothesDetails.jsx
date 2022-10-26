import React, { useEffect } from "react";
import { useClothes } from "../../contexts/ClothesContextProvider";
import { useParams, useNavigate } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ClothesDetails = () => {
  const { id } = useParams();
  const { clothesDetails, getClothesDetails, deleteClothe, addClotheToCart } =
    useClothes();

  const navigate = useNavigate();
  console.log(clothesDetails);

  useEffect(() => {
    getClothesDetails(id);
  }, []);

  return (
    <>
      {clothesDetails ? (
        <div style={{ margin: "5% 40%" }}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              className="card-image"
              component="img"
              alt="clothe image"
              height="350"
              image={clothesDetails.img}
            />
            <CardContent>
              <Typography
                className="card-title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {clothesDetails.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                className="card-body"
              >
                <strong>{clothesDetails.price}</strong>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="card-body card-desc"
              >
                {clothesDetails.desc}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="card-body"
              >
                <i>Type: {clothesDetails.type}</i>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="card-body"
              >
                <i>Category: {clothesDetails.category}</i>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className="btn-details"
                size="small"
                onClick={() => navigate(`/clothes`)}
              >
                Clothes
              </Button>
              <Button
                className="btn-edit"
                size="small"
                onClick={() => navigate(`/edit/${clothesDetails.id}`)}
              >
                Edit
              </Button>
              <Button
                className="btn-delete"
                size="small"
                onClick={() => deleteClothe(clothesDetails.id)}
              >
                Delete
              </Button>
              <Button
                className="btn-cart"
                size="small"
                onClick={() => addClotheToCart(clothesDetails)}
              >
                <AddShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ClothesDetails;
