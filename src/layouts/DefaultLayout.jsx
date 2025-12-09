import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function DefaultLayout() {
  return (
    <>
      <header className="p-4 d-flex justify-content-center gap-5 fs-2 bg-primary-subtle">
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
