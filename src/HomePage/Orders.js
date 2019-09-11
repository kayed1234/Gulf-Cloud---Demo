import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Titles";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, "21 Oct 2019", "المعرض الزراعي", "الرياض", "", 185),
  createData(1, "11 Nov, 2019", "معرض فودكس", "جدة", "", 283),
  createData(
    2,
    "13 Jan, 2020",
    "مؤتمر العلم و الهندسة و التقنيه",
    "الدمام",
    "",
    ""
  ),
  createData(3, "2 Feb, 2020", "مؤتمر التعليم الخليجي", "جدة", "")
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>الاشعارات</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>التاريخ</TableCell>
            <TableCell>الاسم</TableCell>
            <TableCell>المدينه</TableCell>
            <TableCell>الشخص المسؤول</TableCell>
            <TableCell align='right'>عدد العارضين</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

// <div className={classes.seeMore}>
//   <Link color='primary' href='javascript:;'></Link>
// </div>
