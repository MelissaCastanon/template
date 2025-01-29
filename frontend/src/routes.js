// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Hospital from "layouts/hospital";
import Ubicaciones from "layouts/ubicaciones";
import UnidadFuncional from "layouts/unidad-funcional";
import SolicitudesEquipo from "layouts/solicitudes-equipo";
import InventarioEquipo from "layouts/inventario-equipo";
import EquipoBaja from "layouts/equipo-baja";
import AgregarFirma from "layouts/agregar-firma";
import MantenimientoCorrectivo from "layouts/mantenimiento-correctivo";
import MantenimientoPreventivo from "layouts/mantenimiento-preventivo";
import AsistenciaBiomedica from "layouts/asistencia-biomedica";
import Sticker from "layouts/sticker";
import Usuarios from "layouts/usuarios";
import Permisos from "layouts/permisos";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
//import Profile from "layouts/profile";
//import SignIn from "layouts/authentication/sign-in";
//import SignUp from "layouts/authentication/sign-up";

//import UserProfile from "layouts/user-profile";
//import UserManagement from "layouts/user-management";

import Login from "auth/login";
import Register from "auth/register";
import ForgotPassword from "auth/forgot-password";
import ResetPassword from "auth/reset-password";

// @mui icons
import Icon from "@mui/material/Icon";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import RemoveModeratorOutlinedIcon from "@mui/icons-material/RemoveModeratorOutlined";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Hospital",
    key: "hospital",
    icon: <LocalHospitalOutlinedIcon fontSize="small" />,
    route: "/hospital",
    component: <Hospital />,
  },
  {
    type: "collapse",
    name: "Ubicaciones",
    key: "ubicaciones",
    icon: <LocationOnOutlinedIcon fontSize="small" />,
    route: "/ubicaciones",
    component: <Ubicaciones />,
  },
  {
    type: "collapse",
    name: "Unidad Funcional",
    key: "unidad-funcional",
    icon: <SettingsSuggestOutlinedIcon fontSize="small" />,
    route: "/unidad-funcional",
    component: <UnidadFuncional />,
  },
  {
    type: "collapse",
    name: "Solicitudes sobre equipo",
    key: "solicitudes-equipo",
    icon: <HistoryEduOutlinedIcon fontSize="small" />,
    route: "/solicitudes-equipo",
    component: <SolicitudesEquipo />,
  },
  {
    type: "collapse",
    name: "Inventario de equipo",
    key: "inventario-equipo",
    icon: <InventoryOutlinedIcon fontSize="small" />,
    route: "/inventario-equipo",
    component: <InventarioEquipo />,
  },
  {
    type: "collapse",
    name: "Equipo dado de baja",
    key: "equipo-baja",
    icon: <RemoveModeratorOutlinedIcon fontSize="small" />,
    route: "/equipo-baja",
    component: <EquipoBaja />,
  },
  {
    type: "collapse",
    name: "Agregar firma",
    key: "agregar-firma",
    icon: <DrawOutlinedIcon fontSize="small" />,
    route: "/agregar-firma",
    component: <AgregarFirma />,
  },
  {
    type: "collapse",
    name: "Órdenes de Servicio",
    key: "ordenes-de-servicio",
    icon: <Icon fontSize="small">table_view</Icon>,
    collapse: [

    ],
  },

  {
    type: "collapse",
    name: "Mantenimiento Correctivo",
    key: "mantenimiento-correctivo",
    icon: <Icon fontSize="small">subdirectory_arrow_right</Icon>,
    route: "/mantenimiento-correctivo",
    component: <MantenimientoCorrectivo />,
  },
  {
    type: "collapse",
    name: "Mantenimiento Preventivo",
    key: "mantenimiento-preventivo",
    icon: <Icon fontSize="small">subdirectory_arrow_right</Icon>,
    route: "/mantenimiento-preventivo",
    component: <MantenimientoPreventivo />,
  },

  {
    type: "collapse",
    name: "Asistencia Biomédica",
    key: "asistencia-biomedica",
    icon: <Icon fontSize="small">subdirectory_arrow_right</Icon>,
    route: "/asistencia-biomedica",
    component: <AsistenciaBiomedica />,
  },
  {
    type: "collapse",
    name: "Sticker de Mantenimiento",
    key: "sticker",
    icon: <QrCode2OutlinedIcon fontSize="small" />,
    route: "/sticker",
    component: <Sticker />,
  },
  {
    type: "collapse",
    name: "Usuarios y Permisos",
    key: "usuarios-permisos",
    icon: <GroupOutlinedIcon fontSize="small" />,
    collapse: [
    ],
  },
  {
    type: "collapse",
    name: "Usarios",
    key: "usuarios",
    icon: <Icon fontSize="small">subdirectory_arrow_right</Icon>,
    route: "/usuarios",
    component: <Usuarios />,
  },
  {
    type: "collapse",
    name: "Permisos",
    key: "permisos",
    icon: <Icon fontSize="small">subdirectory_arrow_right</Icon>,
    route: "/permisos",
    component: <Permisos />,
  },
  {
    type: "collapse",
    name: "Configuración",
    key: "configuracion",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notificaciones",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  /*{
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },*/
  {
    type: "auth",
    name: "Login",
    key: "login",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/auth/login",
    component: <Login />,
  },
  {
    type: "auth",
    name: "Register",
    key: "register",
    icon: <Icon fontSize="small">person_add</Icon>,
    route: "/auth/register",
    component: <Register />,
  },
  {
    type: "auth",
    name: "Forgot Password",
    key: "forgot-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/auth/forgot-password",
    component: <ForgotPassword />,
  },
  {
    type: "auth",
    name: "Reset Password",
    key: "reset-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/auth/reset-password",
    component: <ResetPassword />,
  },
  /*{
    type: "examples",
    name: "User Profile",
    key: "user-profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user-profile",
    component: <UserProfile />,
  },
  {
    type: "examples",
    name: "User Management",
    key: "user-management",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/user-management",
    component: <UserManagement />,
  },*/
];

export default routes;
