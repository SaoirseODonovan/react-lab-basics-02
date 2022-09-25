import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    padding: 1.5,
  },
};
export default function Course(props) {

  return (
    <>
      <Typography sx={styles.root} variant="h4" component="h1">
        {`${props.title} modules table`}
      </Typography>
      <TableContainer component={"div"}>
        <Table aria-label="modules table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>No. of Lectures</TableCell>
              <TableCell>No. of Practicals</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.modules.map((m, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {m.name}
                </TableCell>
                <TableCell>{m.noLectures}</TableCell>
                <TableCell>{m.noPracticals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}