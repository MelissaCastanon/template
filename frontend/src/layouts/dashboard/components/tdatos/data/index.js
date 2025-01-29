/* 
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDAvatar from "components/MDAvatar";


export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  /*const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );*/

  return {
    columns: [
      { Header: "Jan-2025", accessor: "jan2025", /*width: "45%", align: "left"*/ },
      { Header: "Feb-2025", accessor: "Fab2025", /*width: "10%", align: "left"*/ },
      { Header: "Mar-2025", accessor: "Mar2025", align: "center" },
      { Header: "Apr-2025", accessor: "apr2025", align: "center" },
      { Header: "May-2025", accessor: "may2025", align: "center" },
      { Header: "Jun-2025", accessor: "jun2025", align: "center" },
      { Header: "Jul-2025", accessor: "jul2025", align: "center" },
      { Header: "Aug-2025", accessor: "agu2025", align: "center" },
      { Header: "Sep-2025", accessor: "sep2025", align: "center" },
      { Header: "Oct-2025", accessor: "oct2025", align: "center" },
      { Header: "Nov-2025", accessor: "nov2025", align: "center" },
      { Header: "Dec-2025", accessor: "dec2025", align: "center" },

      { Header: "Jan-2026", accessor: "jan2026", /*width: "45%", align: "left"*/ },
      { Header: "Feb-2026", accessor: "Fab2026", /*width: "10%", align: "left"*/ },
      { Header: "Mar-2026", accessor: "Mar2026", align: "center" },
      { Header: "Apr-2026", accessor: "apr2026", align: "center" },
      { Header: "May-2026", accessor: "may2026", align: "center" },
      { Header: "Jun-2026", accessor: "jun2026", align: "center" },
      { Header: "Jul-2026", accessor: "jul2026", align: "center" },
      { Header: "Aug-2026", accessor: "agu2026", align: "center" },
      { Header: "Sep-2026", accessor: "sep2026", align: "center" },
      { Header: "Oct-2026", accessor: "oct2026", align: "center" },
      { Header: "Nov-2026", accessor: "nov2026", align: "center" },
      { Header: "Dec-2026", accessor: "dec2026", align: "center" },
    ],

    rows: [
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
      {
        
      },
    ],
  };
}
