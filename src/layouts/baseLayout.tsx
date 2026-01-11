import { Outlet } from "react-router-dom";
import MovieHeader from "./components/header";
import MovieFooter from "./components/footer";

const BaseLayout = () => {
  return (
    <div>
      <header>
        <MovieHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <MovieFooter />
      </footer>
    </div>
  );
};

export default BaseLayout;
