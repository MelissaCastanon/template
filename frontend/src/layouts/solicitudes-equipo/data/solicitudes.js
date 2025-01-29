/* 

*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "ID", accessor: "id", width: "10%", align: "left" },
      { Header: "Nombre del Equipo", accessor: "nombre", align: "left" },
      { Header: "usuario", accessor: "usuario", align: "left" },
      { Header: "Tipo de Solicitud", accessor: "solicitud", align: "left" },
      { Header: "Último Estatus", accessor: "status", align: "left" },
      { Header: "Comentarios", accessor: "comentarios", align: "left" },
      { Header: "Acción", accessor: "action", align: "center" },
      { Header: "Fecha y Hora", accessor: "date", align: "left" }
    ],

    rows: [
        {
        id: "1",
        nombre: "Equipo para Alta",
        usuario: "Ana Mendoza",
        solicitud: "ALTA",
        status: "Autorizada",
        comentarios: "Se ha autorizado la solicitud de alta del equipo",
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
        date: "2022-01-01 10:00:00"
      },

      {
        id: "1",
        nombre: "Equipo para Alta",
        usuario: "Ana Mendoza",
        solicitud: "ALTA",
        status: "Autorizada",
        comentarios: "Se ha autorizado la solicitud de alta del equipo",
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
        date: "2022-01-01 10:00:00"
      },
    ],
  };
}
