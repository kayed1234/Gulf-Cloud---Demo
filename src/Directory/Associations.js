import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

export default function TextFields() {
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   name: "Cat in the Hat",
  //   age: "",
  //   multiline: "Controlled",
  //   currency: "EUR"
  // });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  return (
    <div>
      <h2 align='center'>إدخال المعلومات</h2>

      <form className={classes.container} noValidate autoComplete='off'>
        <TextField
          id='standard-name'
          label=' الاسم التسويقي'
          className={classes.textField}
          value=''
          //onChange={handleChange("name")}
          margin='normal'
        />
        <TextField
          id='standard-name'
          label=' المدير المسؤول'
          className={classes.textField}
          value=''
          //onChange={handleChange("name")}
          margin='normal'
        />
        <TextField
          id='standard-name'
          label=' رقم الهوية '
          className={classes.textField}
          value=''
          //onChange={handleChange("name")}
          margin='normal'
        />
        <TextField
          id='standard-name'
          label=' رقم الهاتف المحمول'
          className={classes.textField}
          value=''
          //onChange={handleChange("name")}
          margin='normal'
        />
        <TextField
          id='standard-name'
          label=' البريد الالكتروني'
          className={classes.textField}
          value=''
          //onChange={handleChange("name")}
          margin='normal'
        />
        <TextField
          id='standard-name'
          label=' العنوان'
          className={classes.textField}
          value=''
          //onChange={handleChange("name")}
          margin='normal'
        />
        <TextField
          id='standard-name'
          label='المدينة '
          className={classes.textField}
          value=''
          //onChange={handleChange("name")}
          margin='normal'
        />
      </form>
    </div>
  );
}
