import "./App.css";
import Sidebar from "./components/sidebar";

import Chart from "./components/Chart";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import TableComp from "./components/TableComp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <div className="chart-section mt-3" >
          <Chart />
        </div>
        <div className="table-section">
          <TableComp />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
