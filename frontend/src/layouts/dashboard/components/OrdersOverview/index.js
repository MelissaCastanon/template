import { useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import data from "layouts/dashboard/components/OrdersOverview/data";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Projects() {
  const { columns, rows } = data();

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Projects
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        >
          {rows.map((row, index) => (
            <StyledTableRow key={row.id}>
              {columns.map((column) => (
                <td key={column.id}>{row[column.id]}</td>
              ))}
            </StyledTableRow>
          ))}
        </DataTable>
      </MDBox>
    </Card>
  );
}

export default Projects;
