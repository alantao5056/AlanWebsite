import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="../images/alan-cropped.png"/>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100">
              {/* <li className="nav-item ms-3">
                <Link to="/" className="nav-link">Home</Link>
              </li> */}
              <li className="nav-item ms-3">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item" id="youtube">
                <Link to="https://www.youtube.com/channel/UCzdtyvYuUM6EGKhtsbF_jhQ" target="_blank"><img id="youtube-logo" src="../images/youtube.png"/></Link>
              </li>
              <li className="nav-item" id="github">
                <Link to="https://github.com/alantao5056" target="_blank"><img id="github-logo" src="../images/github.png"/></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}