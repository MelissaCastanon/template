

export default function data() {
  

  return {
    columns: [
      { Header: "EQUIPO", accessor: "equipo", align: "center"},
      { Header: "MARCA", accessor: "marca", align: "center" },
      { Header: "MODELO", accessor: "modelo", align: "center" },
      { Header: "No. SERIE", accessor: "serie", align: "center" },
      { Header: "UBICACIÓN", accessor: "ubicacion", align: "center" },
      { Header: "REPOSICIÓN", accessor: "reposicion", align: "center" },
      { Header: "PERIODO", accessor: "periodo", align: "center" }
    ],

    rows: [
      {
        equipo: "Equipo 1",
        marca: "Marca 1",
        modelo: "Modelo 1",
        serie: "Serie 1",
        ubicacion: "Ubicación 1",
        reposicion: "Reposición 1",
        periodo: "Periodo 1",
      },
      {

      },
      {

      },
      {

      },
      {

      },
      {

      },
    ],
  };
}
