import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { Delete } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Modal as MuiModal } from "@mui/material";
// import Modal from "react-modal";

export default function Contacts({ data }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const handleDelete = () => dispatch(deleteContact(data.id));
  const handleDelete = () => {
    dispatch(deleteContact(data.id));
    setModalIsOpen(false);
  };

  return (
    <div className={css.container} key={data.id}>
      <div className={css.data}>
        <p className={css.text}>
          <RiUser3Fill />
          {data.name}
        </p>
        <p className={css.text}>
          <BiSolidPhone />
          {data.number}
        </p>
      </div>
      <Button
        className={css.btn}
        variant="contained"
        sx={{ backgroundColor: "#5757b4", marginTop: 2 }}
        startIcon={<Delete />}
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Delete
      </Button>
      <Dialog
        className={css.modalContainer}
        open={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        aria-labelledby="dialog-title"
      >
        <DialogTitle id="dialog-title">
          Are you sure you want to delete this contact?
        </DialogTitle>
        <DialogActions>
          <div className={css.modalButtons}></div>
          <Button
            className={css.modalBtn}
            // type="submit"
            variant="contained"
            sx={{ backgroundColor: "#5757b4", marginTop: 2 }}
            onClick={handleDelete}
          >
            Yes
          </Button>
          <Button
            className={css.modalBtn}
            // type="submit"
            variant="contained"
            sx={{ backgroundColor: "#5757b4", marginTop: 2 }}
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
