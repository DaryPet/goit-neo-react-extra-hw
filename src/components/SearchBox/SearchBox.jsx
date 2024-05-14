import css from "./SearchBox.module.css";
import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const id = useId();
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrap}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.data}
        type="text"
        value={nameFilter}
        id={id}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
}
