import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "../componentesp/Sidebar";
import Home from "../componentesp/Home";

function Dashboard() {
  return (
    <div className="containerg">
      <div className="container-fluid bg-secondary min-vh-100 ">
        <div className="row">
          <div className="sidebarhome col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>

          <div className="caca col-4 col-md-2"></div>
          <div className="col">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
