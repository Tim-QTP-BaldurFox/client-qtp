import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

export default function Root() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}