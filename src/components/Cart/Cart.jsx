import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField, Button, Typography } from "@mui/material";

import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

import "../../styles/Cart.css";

import { useCart } from "../../contexts/CartContextProvider";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const navigate = useNavigate();
  const { cart, getCart, changeClotheCount, deleteClotheInCart, addOrder } =
    useCart();
  const [show, setShow] = useState(false);

  useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  let [order, setOrder] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleInp(e) {
    let obj = {
      ...order,
      [e.target.name]: e.target.value,
    };

    setOrder(obj);

    order = {
      name: "",
      phone: "",
      email: "",
    };
  }

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const checkCart = () => {
    if (cart.length === 0) {
      alert("Cart is empty! Please add some article!");
      return;
    } else {
      handleShow();
    }
  };

  return (
    <>
      <TableContainer className="cart-table" component={Paper}>
        <Table aria-label="customized table">
          <TableHead style={{ textAlign: "center" }}>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Count</StyledTableCell>
              <StyledTableCell align="right">SubPrice</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.clothes.map((row) => (
              <StyledTableRow key={row.item.id}>
                <StyledTableCell
                  className="cart-img"
                  component="th"
                  scope="row"
                >
                  <img src={row.item.img} alt="image" width="50" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.item.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.item.category}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.item.price}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
                    type="number"
                    value={row.count}
                    onChange={(e) =>
                      changeClotheCount(e.target.value, row.item.id)
                    }
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => deleteClotheInCart(row.item.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        className="total-price"
        variant="h6"
        component="div"
        style={{ textAlign: "right", marginRight: "15%" }}
      >
        Total price: {cart?.totalPrice}
        <button
          className="btn-buy"
          onClick={() => {
            checkCart();
          }}
        >
          BUY NOW
        </button>
        <Modal className="modalka" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Username"
                name="name"
                variant="standard"
                onChange={handleInp}
                value={order.name}
              />
              <br />
              <TextField
                id="standard-basic"
                label="Phone Number"
                name="phone"
                variant="standard"
                onChange={handleInp}
                value={order.phone}
              />
              <br />
              <TextField
                id="standard-basic"
                label="Email"
                name="email"
                variant="standard"
                onChange={handleInp}
                value={order.email}
              />
              <br />
            </Box>
            <input type="checkbox" /> I confirm
          </Modal.Body>
          <Modal.Footer>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => {
                  addOrder(order);
                  handleClose();
                  cartCleaner();
                  navigate("/clothes");
                }}
                color="error"
                variant="contained"
                endIcon={<SendIcon />}
              >
                Order
              </Button>
            </Stack>
          </Modal.Footer>
        </Modal>
      </Typography>
    </>
  );
}
