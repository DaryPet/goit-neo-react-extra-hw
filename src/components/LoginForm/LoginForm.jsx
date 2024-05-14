import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import { TextField, Button, Typography, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

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
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        {/* <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button> */}
        <Box marginBottom={2}>
          <Field
            name="email"
            as={TextField}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Box>
        <Box marginBottom={2}>
          <Field
            name="password"
            as={TextField}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Box>
        <Button
          className={css.btn}
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#5757b4" }}
          startIcon={<LockIcon />}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
}
