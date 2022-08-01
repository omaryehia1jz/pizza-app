import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Knav(){

return(
  <div className="d-flex min-vh-50" >
  <div id="sidebar" className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
    <div id="sidebar-wrapper" className="min-vh-50">
      <ul className="list-unstyled components">
          <li className="navbar-item"  style={{fontSize: '30px'}}>
            <Link to="/" className="nav-link">DASHBOARD</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Kpending" className="nav-link" style={{fontSize: '20px'}}>PENDING ORDERS</Link>
          </li>
          <li className="navbar-item">
            <Link to="/term" className="nav-link" style={{fontSize: '20px'}}>COMPLETED ORDERS</Link>
          </li>
      </ul>
    </div>
  </div>

  {/* <br/>
  <Route path="/" exact component={Home} />
  <Route path="/about" component={About} />
  <Route path="/term" component={Terms} /> */}
  </div>
)
}
