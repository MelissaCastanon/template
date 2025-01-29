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
      { Header: "Email", accessor: "email", align: "left" },
      { Header: "Creado", accessor: "creado", align: "left" },
      { Header: "Role", accessor: "role", align: "left" },
      { Header: "Acción", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: "1",
        nombre: "Super Admin",
        email: "bhsva@bixs.com",
        usuario: "Manager",
        creado: "2022-01-01",
        role: "Admin",
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
        nombre: "Super Admin",
        email: "bhsva@bixs.com",
        usuario: "Manager",
        creado: "2022-01-01",
        role: "Admin",
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
