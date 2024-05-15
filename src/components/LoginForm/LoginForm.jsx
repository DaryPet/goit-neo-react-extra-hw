import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import { TextField, Button, Typography, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import * as Yup from "yup";

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
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <Box marginBottom={2}>
          <Field
            name="email"
            as={TextField}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: "white" }}
          />
        </Box>
        <ErrorMessage name="email" component="div" className={css.error} />
        <Box marginBottom={2}>
          <Field
            name="password"
            as={TextField}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: "white" }}
          />
        </Box>
        <ErrorMessage name="password" component="div" className={css.error} />
        <Button
          className={css.btn}
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#5757b4", marginTop: 2 }}
          startIcon={<LockIcon />}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
}
