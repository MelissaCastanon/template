import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import hospital from "layouts/hospital/data/hospitales";
import TableRow from '@mui/material/TableRow';
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell"; // Importar el componente

function Tables() {
  const { columns, rows } = hospital();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Hospitales
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  showTotalEntries={false}
                  isSorted={false}
                  noEndBorder
                  entriesPerPage={false}
                >
                  <tbody>
                    {rows.map((row, index) => (
                      <TableRow key={row.id}>
                        {columns.map((column) => {
                          console.log("rowIndex:", index); // Verifica el valor de rowIndex
                          return (
                            <DataTableBodyCell
                              key={column.id}
                              rowIndex={index} // Pasando correctamente el índice
                            >
                              {row[column.id]}
                            </DataTableBodyCell>
                          );
                        })}
                      </TableRow>
                    ))}

                  </tbody>

                </DataTable>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
