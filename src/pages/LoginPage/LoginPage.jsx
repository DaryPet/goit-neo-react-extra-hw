import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.wraper}>
      <h2 className={css.text}>Please Log in!</h2>

      <LoginForm />
    </div>
  );
}
