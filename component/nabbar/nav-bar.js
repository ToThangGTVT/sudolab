import React from "react";

export default class Navbar extends React.Component {

  render() {
    return (
      <div>
        <div className="mb-3">
          <header className="navbar navbar-expand-md navbar-dark d-print-none">
            <div className="container-xl">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                <span className="navbar-toggler-icon"></span>
              </button>
              <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <a href="/">
                  <img src="/icon/logo.svg" width="32" height="32" alt="Tabler" className="navbar-brand-image px-2" />
                </a>
                <a href="/" class="text-reset">SudoLAB</a>
              </h1>
              <div className="navbar-nav flex-row order-md-last">

                <div className="nav-item dropdown d-none d-md-flex me-3">

                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                    <div className="card">
                      <div className="card-body">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="/about-me" className="nav-link d-flex lh-1 text-reset p-0" aria-label="Open user menu">
                    <span className="avatar avatar-sm avatar-rounded">SU</span>
                    <div className="d-none d-xl-block ps-2">
                      <div>About me</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <span className="nav-link-title">
                        Chuyện học hành
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <span className="nav-link-title">
                        Chuyện yêu đương
                      </span>
                      <span hidden className="badge bg-red"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <span className="nav-link-title">
                        Tản mạn đôi lời
                      </span>
                      <span hidden className="badge bg-red"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>

      </div>
    )
  }
}
