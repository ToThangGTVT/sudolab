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
                  <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg>
                    <span className="badge bg-red"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                    <div className="card">
                      <div className="card-body">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <a href="/about-me" className="nav-link d-flex lh-1 text-reset p-0" aria-label="Open user menu">
                    <span className="avatar avatar-sm">SU</span>
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
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <img src="/icon/code.svg"></img>
                      </span>
                      <span className="nav-link-title">
                        Chuyện code dạo
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <img src="/icon/life.svg"></img>
                      </span>
                      <span className="nav-link-title">
                        Chuyện linh tinh hằng ngày
                      </span>
                      <span className="badge bg-red"></span>
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
