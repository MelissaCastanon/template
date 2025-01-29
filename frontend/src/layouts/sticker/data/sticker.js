/* 
Llenado de la tabla
*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

export default function data() {
  return {
    columns: [
      { Header: "ID", accessor: "id", width: "10%", align: "left" },
      { Header: "Nombre del equipo", accessor: "nombre", align: "left" },
      { Header: "Identificador de quipo", accessor: "identificador", align: "left" },
      { Header: "Requiere refacción", accessor: "refaccion", width: "10%", align: "left" },
      { Header: "Último Status", accessor: "status", width: "10%", align: "left" },
      { Header: "Estatus de la OS", accessor: "os", width: "10%", align: "left" },
      { Header: "Descripción del servicio", accessor: "descripcion", width: "10%", align: "left" },
      { Header: "Detalle refacciones", accessor: "detalle", width: "10%", align: "left" },
      { Header: "Tipo de servicio", accessor: "servicio", width: "10%", align: "left" },
      { Header: "Sticker de Mantenimiento", accessor: "sticker", width: "10%", align: "left" },
      { Header: "Stiker de Trazabilidad", accessor: "stickert", width: "10%", align: "left" },
    ],

    rows: [
      {
        id: "1",
        nombre: "Equipo 1",
        identificador: "ID 1",
        refaccion: "Si",
        status: "Activo",
        os: "En proceso",
        descripcion: "Servicio de mantenimiento",
        detalle: "Refacción de pieza",
        servicio: "Mantenimiento preventivo",
        sticker: (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "medium",
              }}
              onClick={() => console.log("Botón Generar presionado")}
            >
              Generar
            </button>
          </div>
        ),
        stickert: (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "medium",
              }}
              onClick={() => console.log("Botón Generar presionado")}
            >
              Generar
            </button>
          </div>
        ),
      },

      {
        id: "2",
        nombre: "Equipo 5",
        identificador: "ID 2",
        refaccion: "No",
        status: "Cerrada",
        os: "En proceso",
        descripcion: "Servicio de mantenimiento",
        detalle: "Refacción de pieza",
        servicio: "Mantenimiento preventivo",
        sticker: (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "medium",
              }}
              onClick={() => console.log("Botón Generar presionado")}
            >
              Generar
            </button>
          </div>
        ),
        stickert: (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "medium",
              }}
              onClick={() => console.log("Botón Generar presionado")}
            >
              Generar
            </button>
          </div>
        ),
      },
    ],
  };
}
