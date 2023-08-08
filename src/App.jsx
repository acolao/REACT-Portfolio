import { Outlet, useLocation } from "react-router-dom";
import Nav from '../src/components/nav/Nav.jsx';

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    //write what will be rendered
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}


