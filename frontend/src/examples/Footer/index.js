/*

*/


// @mui material components
import Link from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer() {
  
  const { size } = typography;
  
  return (
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        Plataforma VRYC &copy; 2021 -  {new Date().getFullYear()}
        
        <Link href="https://vryc.com.mx" target="_blank">
          <MDTypography variant="button" fontWeight="medium">
            &nbsp;VRYC&nbsp;
          </MDTypography>
        </Link>
        Todos los derechos reservados.
      </MDBox>
  );
}

export default Footer;