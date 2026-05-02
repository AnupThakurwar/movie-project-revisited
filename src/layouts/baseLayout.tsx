import { Outlet } from "react-router-dom";
import MovieHeader from "./components/header";
import MovieFooter from "./components/footer";

const BaseLayout = () => {
  return (
    <div className="bg-black">
      <header>
        <MovieHeader />
      </header>
      <main className="pb-6">
        <Outlet />
      </main>
      <footer>
        <MovieFooter />
      </footer>
    </div>
  );
};

export default BaseLayout;
