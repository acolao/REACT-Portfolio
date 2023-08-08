import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Nav({ currentPage }) {
  const pages = ["portfolio", "contact", "resume"];

  return (
    <nav className="flex justify-between items-center w-[98%]  mx-auto">
      <ul className="flex flex-col text-5xl">
        <li
          className={`mx-5 ${currentPage === "/" && "navActive"}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`m-0 ${currentPage === `/${Page}` && "navActive"}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


