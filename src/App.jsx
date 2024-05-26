import "./App.css";
import Sidebar from "./components/sidebar";

import Chart from "./components/Chart";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import TableComp from "./components/TableComp";
import Footer from "./components/Footer";
import Setting from "./components/Setting";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <>
          <div className="d-flex justify-content-end mt-3">
            <Setting />
          </div>
          <div className="chart-section ">
            <Chart />
          </div>
        </>
        <div className="table-section">
          <TableComp />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
