import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-full bg-[#faf0f2] bg-[repeating-linear-gradient(transparent,transparent_31px,#b8c5d6_31px,#b8c5d6_32px)]">
      <div className="h-16">Navbar placeholder</div>
      <main className="h-full mx-auto w-3/5 bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
