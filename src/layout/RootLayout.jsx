import { Outlet } from "react-router-dom";
import  Header from "../component/Header"

function RootLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
