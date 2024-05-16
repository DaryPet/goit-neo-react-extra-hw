import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Contacts({ data }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(data.id));

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
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  );
}
