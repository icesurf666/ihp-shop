import React from "react";
import useCartStore from "hooks/useCartStore";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

interface IProps {
  selectableRows: number;
}

const CustomColumns = ({ selectableRows }: IProps): JSX.Element => {
  const {
    addItemToCart,
    removeItemCart,
    cart,
    removeItemCount,
  } = useCartStore();

  const handleDelete = (selectableRows: number) => {
    cart
      .filter((item, index) => index === selectableRows)
      .map((remove) => removeItemCart(remove));
  };

  const handleAdd = (selectableRows: number) => {
    cart
      .filter((item, index) => index === selectableRows)
      .map((add) => addItemToCart(add));
  };

  const handleRemove = (selectableRows: number) => {
    cart
      .filter((item, index) => index === selectableRows)
      .map((add) => removeItemCount(add));
  };

  return (
    <>
      <IconButton onClick={() => handleRemove(selectableRows)}>
        <RemoveIcon />
      </IconButton>
      <IconButton onClick={() => handleAdd(selectableRows)}>
        <AddIcon />
      </IconButton>
      <IconButton onClick={() => handleDelete(selectableRows)}>
        <DeleteIcon color="error" />
      </IconButton>
    </>
  );
};

export default CustomColumns;
