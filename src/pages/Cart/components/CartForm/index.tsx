import React from "react";
import { Form, Field } from "react-final-form";
import { TextField as TextFieldF } from "final-form-material-ui";
import { Grid, Button } from "@material-ui/core";
import { IValues } from "../../types";
import { useStyles } from "./styles";

interface IProps {
  onSubmit: (values: IValues) => void;
}

const CartForm: React.FC<IProps> = ({ onSubmit }) => {
  const classes = useStyles()
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container alignItems="center" justify="center" spacing={2}>
            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="name"
                component={TextFieldF}
                type="text"
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                fullWidth
                required
                name="email"
                component={TextFieldF}
                type="email"
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={submitting}
                fullWidth
                type="submit"
                className={classes.submitBtn}
              >
                Buy
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default CartForm;
