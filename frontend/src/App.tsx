import { Header, Footer, Main } from "./components/index";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
