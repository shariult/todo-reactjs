import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="container main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
