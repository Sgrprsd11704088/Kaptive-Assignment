import "./App.css";
import Footer from "./components/Footer";
import TableComp from "./components/Table";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{margin: "0px 20px"}}>
          <TableComp />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
