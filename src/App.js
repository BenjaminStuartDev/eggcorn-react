import "./App.css";
import GlobalContexts from "./components/GlobalContexts";
import ActiveModals from "./components/modals/ActiveModals";
import Navbar from "./components/navbar/Navbar";
import ReactHome from "./components/pages/ReactHome";

function App() {
  return (
    <>
      <GlobalContexts>
        <Navbar />
        <ActiveModals/>
        <ReactHome />
      </GlobalContexts>
    </>
  );
}

export default App;
