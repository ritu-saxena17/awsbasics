import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";
import clsx from "clsx";

function TextFields(props) {
  const classes = useStyles();
  return (
    <TextField
      required
      type={props.field}
      label={props.label}
      autoCorrect="false"
      variant="outlined"
      className={clsx(classes.textField)}
      value={props.value}
      onChange={props.onChange}
      fullWidth
    />
  );
}

export default TextFields;