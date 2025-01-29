/*

*/

import * as React from 'react';
// @mui material components
import Card from "@mui/material/Card";
import Brightness1Icon from '@mui/icons-material/Brightness1';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";


function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Simbología
        </MDTypography>
        <MDBox mt={0} mb={2}>
        </MDBox>
      </MDBox>
      <MDBox p={2}>

      <MDBox display="flex" alignItems="center" spacing={2}>
        <MDBox display="flex" alignItems="center" sx={{ mr: 2 }}>
          <Brightness1Icon sx={{ color: 'info.main' }} />
          <MDTypography variant="button" color="text" fontWeight="medium">
            Programado
          </MDTypography>
        </MDBox>

        <MDBox display="flex" alignItems="center" sx={{ mr: 2 }}>
          <Brightness1Icon sx={{ color: 'success.main' }} />
          <MDTypography variant="button" color="text" fontWeight="medium">
            Ejecutado
          </MDTypography>
        </MDBox>

        <MDBox display="flex" alignItems="center" sx={{ mr: 2 }}>
          <Brightness1Icon sx={{ color: 'warning.main' }} />
          <MDTypography variant="button" color="text" fontWeight="medium">
            Reprogramado
          </MDTypography>
        </MDBox>
      </MDBox>

      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
