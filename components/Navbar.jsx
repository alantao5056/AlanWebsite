import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="../images/alan-cropped.png"/>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item" id="github">
              <a href="https://github.com/alantao5056" target="_blank"><img src="../images/github.png"/></a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="d-flex mb-3">
        <div class="me-auto p-2">Flex item</div>
        <div class="p-2">Flex item</div>
        <div class="p-2">Flex item</div>
      </div>
    </div>
  )
}