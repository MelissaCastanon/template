
import Grid from "@mui/material/Grid";
import React from "react";
import MDBox from "@mui/material/Box";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const FiltersContainer = () => {
  const filters = [
    { name: "Equipo", options: ["Equipo 1", "Equipo 2", "Equipo 3"] },
    { name: "Fecha", options: ["2024-08-26 00:00:00", "2024-10-26 12:00:00", "2024-30-26 01:00:00"] },
    { name: "Último Estatus", options: ["Apple", "Samsung", "Sony"] },
    { name: "Atendido por", options: ["A1", "B2", "C3"] },
  ];

  return (
    <MDBox
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: 3,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <MDTypography
        variant="h6"
        component="div"
        sx={{ marginBottom: 2 }}
      >
        Filtros
      </MDTypography>

      <MDBox sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
        {filters.map((filter, index) => (
          <MDBox
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "flex-start",
              padding: 2,
              backgroundColor: "#fff",
              borderRadius: 4,
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              minWidth: "270px"
            }}
          >
            <MDTypography variant="subtitle2" component="div">
              {filter.name}
            </MDTypography>
            <FormControl fullWidth size="small" sx={{ minWidth: "" }}>
              <InputLabel>Seleccionar {filter.name}</InputLabel>
              <Select>
                {filter.options.map((option, idx) => (
                  <MenuItem key={idx} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </MDBox>
        ))}

        <Grid item sm={1} lg={3} minWidth={10} >
          <MDButton variant="gradient" color="success" /*onClick={openSuccessSB}*/ fullWidth>
            Enviar
          </MDButton>
        </Grid>
      </MDBox>

    </MDBox>
  );
};

export default FiltersContainer;