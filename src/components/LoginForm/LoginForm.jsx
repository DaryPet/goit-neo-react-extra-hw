import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then((response) => {
        console.log(response);
        toast.success("You are succesfully Loged In!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error! Please try again!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
