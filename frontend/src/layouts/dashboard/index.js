/*
*/

import { useState } from "react";  // Importar useState

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import RemoveModeratorOutlinedIcon from '@mui/icons-material/RemoveModeratorOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

// Material Dashboard 2 React components
import MDBox from "components/MDBox"; 
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard components
import Filtro from "layouts/dashboard/components/filtro";

import Projects from "layouts/dashboard/components/Projects/index";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview/index";
import Simbologia from "layouts/dashboard/components/simbologia";

import Datos from "layouts/dashboard/components/datos";
import Tdatos from "layouts/dashboard/components/tdatos";
import Calendario from "layouts/dashboard/components/calendario";

function Dashboard() {
  const [view, setView] = useState(null); // null, "color", o "datos"

  const showColorComponents = () => {
    setView("color"); // Mostrar componentes "PAMPEM a Color"
  };

  const showDataComponents = () => {
    setView("datos"); // Mostrar componentes "PAMPEM con Datos"
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<LocalHospitalOutlinedIcon frontSize="large"/>}
                title="Hospitales"
                count={3}
                percentage={{
                  color: "success",
                  //amount: "+55%",
                  label: "Más información",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<InventoryOutlinedIcon/>}
                title="Inventario de Equipo"
                count="22"
                percentage={{
                  color: "success",
                  //amount: "+3%",
                  label: "Más información",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="secondary"
                icon={<SettingsSuggestOutlinedIcon frontSize="large"/>}
                title="Mantenimiento Correctivo"
                count="12"
                percentage={{
                  color: "success",
                  //amount: "+1%",
                  label: "Más información",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon={<SettingsOutlinedIcon/>}
                title="Mantenimiento Preventivo"
                count="2"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Más información",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<DomainAddOutlinedIcon/>}
                title="Asistencia Biomédica"
                count="12"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Más información",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon={<RemoveModeratorOutlinedIcon/>}
                title="Equipo dado de baja"
                count="2"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Más información",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<FmdGoodOutlinedIcon frontSize="large"/>}
                title="Ubicaciones"
                count="13"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Más información",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Filtro />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Calendario />
        </Grid>

        <Grid item xs={12} lg={8} mt={2}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h6">Tabla de Equipos</MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container direction="row" spacing={2} justifyContent="flex-end">
                  <Grid item xs="auto" /*sm={1} lg={3}*/>
                    <MDButton variant="gradient" color="success" /*onClick={openSuccessSB}*/ fullWidth>
                      Descargar Excel
                    </MDButton>
                  </Grid>
                  <Grid item xs="auto" /*sm={1} lg={3}*/>
                    <MDButton variant="gradient" color="error" /*onClick={openInfoSB}*/ fullWidth>
                      Descargar PDF
                    </MDButton>
                  </Grid>
                  <Grid item xs="auto" /*sm={1} lg={3}*/>
                    <MDButton variant="gradient" color="warning" onClick={showColorComponents} fullWidth>
                      PAMPEM a Color
                    </MDButton>
                  </Grid>
                  <Grid item xs="auto" /*sm={1} lg={3}*/>
                    <MDButton variant="gradient" color="primary" onClick={showDataComponents} fullWidth>
                      PAMPEM con Datos
                    </MDButton>
                  </Grid>
                  <Grid item xs="auto" /*sm={1} lg={3}*/>
                    <MDButton variant="gradient" color="secondary" /*onClick={openErrorSB}*/ fullWidth>
                      PAMPEM Filtros por mes
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>

          {view === "color" && (
            <Grid>
              <MDBox mt={2}>
                <Grid item xs={12} md={6} lg={4}>
                  <Simbologia />
                </Grid>
                <Grid container spacing={3} mt={1}>
                  <Grid item xs={12} md={6} lg={4}>
                    <OrdersOverview />
                  </Grid>
                  <Grid item xs={12} md={6} lg={8}>
                    <Projects />
                  </Grid>
                </Grid>
              </MDBox>
            </Grid>
          )}
          
          {view === "datos" && (
            <Grid>
              <MDBox mt={2}>
                <Grid item xs={12} md={6} lg={4}>
                  <Simbologia />
                </Grid>
                <Grid container spacing={3} mt={1}>
                  <Grid item xs={12} md={6} lg={4}>
                    <Datos />
                  </Grid>
                  <Grid item xs={12} md={6} lg={8}>
                    <Tdatos />
                  </Grid>
                </Grid>
              </MDBox>
            </Grid>
          )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
