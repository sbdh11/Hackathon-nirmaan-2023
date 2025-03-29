import "./dashboard.css";
import { Outlet, Link } from "react-router-dom";

let Sidebar = () => {
    return  <aside id="sidebar" className="sidebar" style = {{background : "#ecb831"}}>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/admin" style = {{background : "#ffdf94"}}>
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </a>
        </li>{/* End Dashboard Nav */}

        <li className="nav-item">
        <Link className="nav-link collapsed" to="/adminalumnis" style = {{background : "#ffdf94"}}>
            <i className="bi bi-person" />
            <span>Alumni Records</span>
          </Link>
        </li>{/* End Dashboard Nav */}
        
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#" style = {{background : "#ffdf94"}}>
            <i className="bi bi-bar-chart" /><span>Charts</span><i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="charts-chartjs.html" style = {{background : "#ffdf94"}}>
                <i className="bi bi-circle" /><span>Chart.js</span>
              </a>
            </li>
            <li>
              <a href="charts-apexcharts.html" style = {{background : "#ffdf94"}}>
                <i className="bi bi-circle" /><span>ApexCharts</span>
              </a>
            </li>
            <li>
              <a href="charts-echarts.html" style = {{background : "#ffdf94"}}>
                <i className="bi bi-circle" /><span>ECharts</span>
              </a>
            </li>
          </ul>
        </li>{/* End Charts Nav */}
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
        <Link className="nav-link collapsed" to="/AdminProfile" style = {{background : "#ffdf94"}}>
            <i className="bi bi-person" />
            <span>Profile</span>
          </Link>
        </li>{/* End Profile Page Nav */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/adminchats" style = {{background : "#ffdf94"}}>
            <i className="bi bi-chat-fill" />
            <span>Chats</span>
          </Link>
        </li>{/* End F.A.Q Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-contact.html" style = {{background : "#ffdf94"}}>
            <i className="bi bi-envelope" />
            <span>Contact</span>
          </a>
        </li>{/* End Contact Page Nav */}
        
      </ul>
    </aside>
}

export default Sidebar;