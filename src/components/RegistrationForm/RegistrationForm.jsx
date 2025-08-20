import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { TextField, Button, Typography, Box } from "@mui/material";
import { toast } from "react-hot-toast";
import LockIcon from "@mui/icons-material/Lock";
import * as Yup from "yup";

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
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Required"),
      })}
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
            sx={{ backgroundColor: "white" }}
          />
        </Box>

        <ErrorMessage name="name" component="div" className={css.error} />

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
          Register
        </Button>
      </Form>
    </Formik>
  );
}
