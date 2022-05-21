// import React from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";

// const Details = () => {
//   const user = useSelector(selectUser);

//   return (
//     <div>
//       <h1>User Details</h1>
//       <h1>{user.fname}</h1>
//       <h1>{user.lname}</h1>
//       <h1>{user.address}</h1>
//       <h1>{user.company}</h1>
//       <h1>{user.phone}</h1>
//     </div>
//   );
// };

// export default Details;

import * as React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable() {
  const user = useSelector(selectUser);
  return (
    <TableContainer component={Paper} style={{ margin: "50px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableCell>
            <TableRow>First name :</TableRow>
          </TableCell>
          <TableCell>{user.fname}</TableCell>

          <TableRow>
            <TableCell> Last name:</TableCell>
            <TableCell>{user.lname}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell> Address</TableCell>
            <TableCell>{user.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Phone Number</TableCell>
            <TableCell>{user.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Company </TableCell>
            <TableCell>{user.company}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
