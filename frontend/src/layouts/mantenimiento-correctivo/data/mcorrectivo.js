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
      { Header: "Requiere refacción", accessor: "refaccion", align: "left" },
      { Header: "Ultimo estatus", accessor: "status", align: "left" },
      { Header: "Ver refacciones", accessor: "refacciones", align: "left" },
      { Header: "Descripción del servicio", accessor: "descripcion", align: "left" },
      { Header: "Detalle refacciones", accessor: "detall", align: "center" },
      { Header: "PDF Correctivo", accessor: "pdf", align: "left" },
      { Header: "Acciones del Mantenimeinto Correctivo", accessor: "action", align: "center" },
      { Header: "Solicitud / Fecha y hora", accessor: "date", align: "left" },
    ],

    rows: [
      {
        id: "1",
        nombre: "Servicio 1",
        usuario: "Juan",
        refaccion: "Si",
        status: "En proceso",
        refacciones: "Ver refacciones",
        descripcion: "Descripción del servicio 1",
        detall: "Detalle de refacciones 1",
        pdf: "PDF Correctivo 1",
        date: "Solicitud / Fecha y hora 1",
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
        nombre: "Servicio 2",
        usuario: "Pedro",
        refaccion: "No",
        status: "Finalizado",
        refacciones: "Ver facciones",
        descripcion: "Descripción del servicio 1",
        detall: "Detalle de refacciones 1",
        pdf: "PDF Correctivo 1",
        date: "Solicitud / Fecha y hora 1",
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
      }
    ],
  };
}
