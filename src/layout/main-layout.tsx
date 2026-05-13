// import { Navbar } from "@/components/common/navbar";
// import Footer from "@/components/common/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router";

const MainLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="body-height max-w-480 mx-auto px-4 sm:px-6 lg:px-0">
        <Outlet />
      </div>
      {/* <Footer /> */}
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
