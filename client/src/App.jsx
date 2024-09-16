import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
