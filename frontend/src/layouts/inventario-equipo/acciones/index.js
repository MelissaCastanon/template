import { useState } from "react";  // Importar useState

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";


import Filtro from "layouts/inventario-equipo/acciones/data/filtro";
import Agregar from "layouts/inventario-equipo/acciones/data/agregar";

function Dashboard() {
    const [view, setView] = useState(null); // null, "color", o "datos"

    // Función para mostrar los componentes de filtro
    const showColorComponents = () => {
        setView("filtro"); // Mostrar componentes "PAMPEM a Color"
    };

    // Función para mostrar los componentes de datos
    const showDataComponents = () => {
        setView("formulario"); // Mostrar componentes "PAMPEM con Datos"
    };

    return (
        <MDBox py={3}>

            <Grid item xs={12} lg={8} mt={2}>
                <Card>
                    <MDBox p={1} lineHeight={0}>
                        <MDTypography variant="h6">Acciones</MDTypography>
                    </MDBox>
                    <MDBox p={1}>
                        <Grid container direction="row" spacing={2} justifyContent="flex-end">
                            <Grid item xs="auto" /*sm={1} lg={3}*/>
                                <MDButton variant="gradient" color="warning" onClick={showColorComponents} fullWidth>
                                    Filtrar
                                </MDButton>
                            </Grid>
                            <Grid item xs="auto" /*sm={1} lg={3}*/>
                                <MDButton variant="gradient" color="primary" onClick={showDataComponents} fullWidth>
                                    Agregar
                                </MDButton>
                            </Grid>
                            <Grid item xs="auto" /*sm={1} lg={3}*/>
                                <MDButton variant="gradient" color="success" /*onClick={showDataComponents}*/ fullWidth>
                                    Exportar a Excel
                                </MDButton>
                            </Grid>
                            <Grid item xs="auto" /*sm={1} lg={3}*/>
                                <MDButton variant="gradient" color="error" /*onClick={showDataComponents}*/ fullWidth>
                                    Exportar a PDF
                                </MDButton>
                            </Grid>
                            <Grid item xs="auto" /*sm={1} lg={3}*/>
                                <MDButton variant="gradient" color="dark" /*onClick={showDataComponents}*/ fullWidth>
                                    Generar QR Equipo PDF
                                </MDButton>
                            </Grid>
                        </Grid>
                    </MDBox>
                </Card>
            </Grid>

            {view === "filtro" && (
                <Grid>
                    <MDBox mt={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Filtro />
                        </Grid>
                    </MDBox>
                </Grid>
            )}

            {view === "formulario" && (
                <Grid>
                    <MDBox mt={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Agregar />
                        </Grid>
                    </MDBox>
                </Grid>
            )}
        </MDBox>
    );
}

export default Dashboard;
