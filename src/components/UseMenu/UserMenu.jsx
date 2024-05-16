import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then((response) => {
        console.log(response);
        toast.success("You are sucessfully Loged Out!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("There is an error! Please try logged out again!");
      });
  };
  return (
    <div color={css.wraper}>
      <p>Welcome, {user.name}</p>
      <button className={css.btn} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
