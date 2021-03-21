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
                <a href=".">
                  <img src="https://preview.tabler.io/static/logo.svg" width="32" height="32" alt="Tabler" className="navbar-brand-image" />
                </a>
              </h1>
              <div className="navbar-nav flex-row order-md-last">
                <div className="nav-item d-none d-md-flex me-3">
                  <a href="https://github.com/tabler/tabler" className="btn btn-outline-github" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                    Source code
                  </a>
                </div>
                <div className="nav-item dropdown d-none d-md-flex me-3">
                  <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg>
                    <span className="badge bg-red"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                    <div className="card">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet consectetur exercitationem fugiat in ipsa ipsum, natus odio quidem quod repudiandae sapiente. Amet debitis et magni maxime necessitatibus ullam.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                    <span className="avatar avatar-sm"></span>
                    <div className="d-none d-xl-block ps-2">
                      <div>Maryjo Lebarree</div>
                      <div className="mt-1 small text-muted">Civil Engineer</div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <a href="#" className="dropdown-item">Set status</a>
                    <a href="#" className="dropdown-item">Profile &amp; account</a>
                    <a href="#" className="dropdown-item">Feedback</a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">Settings</a>
                    <a href="#" className="dropdown-item">Logout</a>
                  </div>
                </div>
              </div>
              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="./#">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                      </span>
                      <span className="nav-link-title">
                        First
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./#">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                      </span>
                      <span className="nav-link-title">
                        Second
                      </span>
                      <span className="badge bg-red">2</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#navbar-third" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                      </span>
                      <span className="nav-link-title">
                        Third
                      </span>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="./#">
                        First
                      </a>
                      <a className="dropdown-item" href="./#">
                        Second
                      </a>
                      <a className="dropdown-item" href="./#">
                        Third
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="./#">
                      <span className="nav-link-icon d-md-none d-lg-inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                      </span>
                      <span className="nav-link-title">
                        Disabled
                      </span>
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