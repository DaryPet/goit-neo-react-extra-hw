// import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UseMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  // const isLoggedIn = useSelector();
  return (
    <header>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <UserMenu />
      <AuthNav />
    </header>
  );
}
