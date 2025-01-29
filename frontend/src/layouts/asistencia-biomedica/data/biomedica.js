/* 
Llenado de la tabla
*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "ID", accessor: "id", width: "10%", align: "left" },
      { Header: "Nombre del Equipo", accessor: "nombre", align: "left" },
      { Header: "Usuario", accessor: "usuario", align: "left" },
      { Header: "Estatus de la OS", accessor: "status", align: "left" },
      { Header: "Ver refacciones", accessor: "refacciones", align: "left" },
      { Header: "Descripciones de la asistencia biomédica", accessor: "detalle", align: "center" },
      { Header: "Falla reportada", accessor: "falla", align: "center" },
      { Header: "PDF", accessor: "pdf", align: "left" },
      { Header: "Solicitud / Fecha y hora", accessor: "date", align: "left" },
      { Header: "Atendido por", accessor: "solicitud", align: "left" },
      { Header: "Solicitud atendida / Fecha y hora", accessor: "sdate", align: "left" },
      { Header: "Acciones", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: "1",
        nombre: "Servicio 1",
        usuario: "Juan",
        status: "En proceso",
        refacciones: "Ver refacciones",
        detalle: "Descripción de la asistencia biomédica",
        falla: "Falla reportada",
        pdf: "Descargar PDF",
        date: "2024-21-01 00:00:00",
        solicitud: "Atendido por",
        sdate: "2024-21-01 00:00:00",
        action: (
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="info"
                fontWeight="medium"
              >
                Editar
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="error"
                fontWeight="medium"
              >
                Eliminar
              </MDTypography>
            </div>
          ),
      },

      {
        id: "2",
        nombre: "Servicio 1",
        usuario: "Pablo",
        status: "En proceso",
        refacciones: "Ver refacciones",
        detalle: "Descripción de la asistencia biomédica",
        falla: "Falla reportada",
        pdf: "Descargar PDF",
        date: "2024-21-01 00:00:00",
        solicitud: "Atendido por",
        sdate: "2024-21-01 00:00:00",
        action: (
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="info"
                fontWeight="medium"
              >
                Editar
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="error"
                fontWeight="medium"
              >
                Eliminar
              </MDTypography>
            </div>
          ),
      },
    ],
  };
}
