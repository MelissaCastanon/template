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
      { Header: "Usuario", accessor: "usuario", align: "left" },
      { Header: "Slug", accessor: "slug", align: "left" },
      { Header: "RFC", accessor: "rfc", align: "left" },
      { Header: "Número celular", accessor: "numero", align: "center" },
      { Header: "Acción", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: "1",
        nombre: "Hospital San Benito",
        email: "hospitalsanbenito@gmail.com",
        usuario: "Manager",
        slug: "HSB",
        rfc: "HSB123456H12",
        numero: "1234567890",
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Editar
          </MDTypography>
        ),
      },
    ],
  };
}
