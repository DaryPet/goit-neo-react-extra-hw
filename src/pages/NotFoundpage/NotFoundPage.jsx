import { Link } from "react-router-dom";
import css from "./NotFoundpahe.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.wraper}>
      <p className={css.text}>Sorry, page not found</p>
      <p className={css.text}>
        Please visit our <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
