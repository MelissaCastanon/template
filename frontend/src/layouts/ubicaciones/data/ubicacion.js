/* 

*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

export default function data() {

  return {
    columns: [
      { Header: "ID", accessor: "id", width: "10%", align: "left" },
      { Header: "Nombre", accessor: "nombre", align: "left" },
      { Header: "Unidad Funcional", accessor: "unidad", align: "left" },
      { Header: "Nombre Corto", accessor: "shortname", align: "left" },
      { Header: "Creado", accessor: "creado", align: "left" },
      { Header: "Acción", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: "1",
        nombre: "N/A",
        unidad: "Bombas y perfusores",
        shortname: "N/A",
        creado: "Hace 5 meses",
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
        id: "1",
        nombre: "N/A",
        unidad: "Bombas y perfusores",
        shortname: "N/A",
        creado: "Hace 5 meses",
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
