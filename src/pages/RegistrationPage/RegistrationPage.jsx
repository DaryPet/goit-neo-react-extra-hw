import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.wraper}>
      <h2 className={css.title}>Please Register!</h2>
      <RegistrationForm />
    </div>
  );
}
