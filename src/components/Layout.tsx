import { Outlet } from "react-router-dom";
import kasane from "../assets/kasane.gif";
import kaworu from "../assets/kaworu.gif";
import len from "../assets/len.gif";
import miku from "../assets/miku.gif";

function Layout() {
  return (
    <div className="h-screen flex flex-col w-full bg-[#faf0f2] bg-[repeating-linear-gradient(transparent,transparent_31px,#b8c5d6_31px,#b8c5d6_32px)]">
      <section id="gifs">
        <div className="fixed top-1/3 left-10 w-48">
          <img src={kaworu} alt="best boy" />
        </div>
        <div className="fixed top-2/3 left-10 w-48">
          <img src={kasane} alt="kasane" />
        </div>
        <div className="fixed top-1/3 right-10 w-48">
          <img src={miku} alt="miku" />
        </div>
        <div className="fixed top-2/3 right-10 w-48">
          <img src={len} alt="len" />
        </div>
      </section>
      <div className="h-16">Navbar placeholder</div>
      <main className="flex-1 overflow-y-auto mx-auto w-3/5 bg-white scrollbar-none">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
