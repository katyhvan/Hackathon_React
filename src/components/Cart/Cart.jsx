import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField, Button, Typography } from "@mui/material";

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
  const { cart, getCart, changeClotheCount, deleteClotheInCart } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }
  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
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
                <StyledTableCell component="th" scope="row">
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
                    Delete from cart
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant="h6"
        component="div"
        style={{ textAlign: "right", marginRight: "15%" }}
      >
        Total price: {cart?.totalPrice}
        <Button>BUY NOW</Button>
      </Typography>
    </>
  );
}
