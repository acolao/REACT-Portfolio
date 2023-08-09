import { useEffect } from "react";
import PageContent from "../pageContent/pageContent";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Outlet } from "react-router-dom";

export default function Page({ currentPage }) {

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage)}</h2>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}