import { Header, Footer, Main } from "./components/index";
import {Outlet} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
