/*

*/

import { useState } from "react";  // Importar useState

// Material Dashboard 2 React components
import MDBox from "components/MDBox"; 
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";


// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import DataTable from "examples/Tables/DataTable";

// Data
import solicitud from "layouts/solicitudes-equipo/data/solicitudes";
import Acciones from "layouts/solicitudes-equipo/acciones/index";


function Tables() {
  const { columns, rows } = solicitud();

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid item xs={12} md={6} lg={4}>
        <Acciones />
      </Grid>

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
                  Solicitud de Equipo
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
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
