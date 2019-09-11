import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Titles";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>عدد الاسر المسجلة</Title>
      <Typography component='p' variant='h3'>
        253
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        on 15 Oct, 2019
      </Typography>
      <div>
        <Link color='primary' href='javascript:;'>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
