import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { TextField, Button, Typography, Box } from "@mui/material";
import { toast } from "react-hot-toast";
import LockIcon from "@mui/icons-material/Lock";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values))
      .unwrap()
      .then((response) => {
        console.log(response);
        toast.success("You are succesfully Registred!");
      })
      .catch((error) => {
        console.log(error);
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
        <Typography variant="h5" gutterBottom>
          Registration
        </Typography>
        <Box marginBottom={2}>
          <Field
            name="name"
            as={TextField}
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Box>
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
        {/* <label className={css.label}>
          Username <Field type="text" name="name" />
        </label> */}
        {/* <label className={css.label}>
          Email <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password <Field type="password" name="password" />
        </label> */}
        {/* <button type="submit">Register</button> */}
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#5757b4" }}
          startIcon={<LockIcon />}
        >
          Register
        </Button>
      </Form>
    </Formik>
  );
}
