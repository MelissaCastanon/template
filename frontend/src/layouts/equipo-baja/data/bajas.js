/* 
Llenado de la tabla
*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "ID", accessor: "id", width: "10%", align: "left" },
      { Header: "Nombre", accessor: "nombre", align: "left" },
      { Header: "Nombre Corto", accessor: "shortname", align: "left" },
      { Header: "Usuario", accessor: "usuario", align: "left" },
      { Header: "Marca", accessor: "marca", align: "left" },
      { Header: "Modelo", accessor: "modelo", align: "left" },
      { Header: "Número de serie", accessor: "numero", align: "left" },
      { Header: "Ubicación", accessor: "ubicacion", align: "center" },
      { Header: "Historial de mantenimiento", accessor: "historial", align: "left" },
      { Header: "Fecha de Instalación", accessor: "date", align: "center" },
    ],

    rows: [
      {
        id: "1",
        nombre: "Equipo 8",
        shortname: "ARNC",
        usuario: "Super Admin",
        marca: "Drager",
        modelo: "Fabius",
        numero: "serie 1236",
        ubicacion: "Sala 1",
        historial: "Image",
        date: "2022-01-01",
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
        nombre: "Prueba",
        shortname: "ACCERE",
        usuario: "Super Admin",
        marca: "ARA",
        modelo: "SD",
        numero: "565511236",
        ubicacion: "Sala 7",
        historial: "Image",
        date: "2022-01-01",
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
