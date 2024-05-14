import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values))
      .unwrap()
      .then((response) => {
        toast.success("You are succesfully Registred!");
      })
      .catch((error) => {
        toast.error("There is an error! Please try again!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Username <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
