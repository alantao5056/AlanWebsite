import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logo" src="images/alan-cropped.png"/>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100">
              <li className="nav-item ms-3">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item ms-3">
                <a href="/about" className="nav-link">About</a>
              </li>
              <li className="nav-item ms-3">
                <a href="/blog" className="nav-link">Blog</a>
              </li>
              <li className="nav-item" id="youtube">
                <a href="https://www.youtube.com/@AlanCS-ub9id" target="_blank"><img id="youtube-logo" src="images/youtube.png"/></a>
              </li>
              <li className="nav-item" id="github">
                <a href="https://github.com/alantao5056" target="_blank"><img id="github-logo" src="images/github.png"/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}