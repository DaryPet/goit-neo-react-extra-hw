import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UseMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from "@mui/material";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <MuiAppBar
      position="static"
      className={css.appBar}
      sx={{ backgroundColor: "#5757b4" }}
    >
      <Toolbar>
        <Navigation />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Contact Book
        </Typography>

        {/* <header className={css.header}> */}
        <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>

        {/* </header> */}
      </Toolbar>
    </MuiAppBar>
  );
}
