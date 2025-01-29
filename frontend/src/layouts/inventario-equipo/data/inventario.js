/* 
Llenado de la tabla
*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "ID", accessor: "id", width: "10%", align: "left" },
      { Header: "Código QR", accessor: "qr", width: "10%", align: "left" },
      { Header: "Nombre", accessor: "nombre", align: "left" },
      { Header: "Nombre Corto", accessor: "shortname", align: "left" },
      { Header: "Usuario", accessor: "usuario", align: "left" },
      { Header: "Marca", accessor: "marca", align: "left" },
      { Header: "Modelo", accessor: "modelo", align: "left" },
      { Header: "Hospital", accessor: "hospital", align: "left" },
      { Header: "Número de serie", accessor: "numero", align: "center" },
      { Header: "Ubicación", accessor: "ubicacion", align: "center" },
      { Header: "Identificador de equipos", accessor: "identificador", align: "center" },
      { Header: "Fecha de Servicio", accessor: "date", align: "center" },
      { Header: "Fecha de instalación", accessor: "instalacion", align: "center" },
      { Header: "Garantia", accessor: "garantia", align: "center" },
      { Header: "Historial de mantenimiento", accessor: "historial", align: "center" },
      { Header: "Estatus de la OS", accessor: "status", align: "center" },
      { Header: "Acciones", accessor: "action", align: "center" },
      { Header: "Sticker", accessor: "stiker", align: "center" },
      { Header: "Crear Mantenimiento Preventivo", accessor: "preventivo", align: "center" },
      { Header: "Crear Mantenieminto Correctivo", accessor: "correctivo", align: "center" },
    ],

    rows: [
      {
        id: "1",
        qr: "Image",
        nombre: "Equipo 1",
        shortname: "BASCNEO",
        usuario: "Super Admin",
        marca: "Edan",
        modelo: "SDI",
        hospital: "Hospital San Benito",
        numero: "serie 1233",
        ubicacion: "N/A",
        identificador: "HSB/BASCNEO/1",
        date: "2024-12-01-00:00:00",
        instalacion: "2024-12-01-00:00:00",
        garantia: "N/A",
        historial: "icon",
        status: "Funcional",
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
        sticker: "boton",
        preventivo: "N/A",
        correctivo: "N/A",
      },

      {
        id: "2",
        qr: "Image",
        nombre: "Equipo 2",
        shortname: "ACCERE",
        usuario: "Super Admin",
        marca: "Drager",
        modelo: "Narkomed 2A",
        hospital: "Hospital San Benito",
        numero: "serie 1233",
        ubicacion: "N/A",
        identificador: "HSB/BASCNEO/1",
        date: "2024-12-01-00:00:00",
        instalacion: "2024-12-01-00:00:00",
        garantia: "N/A",
        historial: "icon",
        status: "Funcional",
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
        sticker: "boton",
        preventivo: "N/A",
        correctivo: "N/A",
      },
    ],
  };

  
}
