import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { Button, Typography } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
// import { TextField, Button, Typography, Box } from "@mui/material";
import { addContact } from "../../redux/contacts/operations";

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(10, "Too long!")
    .required("Required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrap}>
        <Typography variant="h5" gutterBottom sx={{ color: "aliceblue " }}>
          Manage your Contacts
        </Typography>
        <div className={css.item}>
          <label htmlFor={nameFieldId} className={css.text}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.item}>
          <label htmlFor={telFieldId} className={css.text}>
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={telFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <Button
          className={css.btn}
          type="submit"
          variant="contained"
          startIcon={<AddCircle />}
          sx={{ backgroundColor: "#5757b4", marginTop: 2 }}
        >
          ADD CONTACT
        </Button>
      </Form>
    </Formik>
  );
}
