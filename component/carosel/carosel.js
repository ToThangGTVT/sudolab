import React from "react";

export default class Carosel extends React.Component {

  styleCard = {
    maxWidth: 290,
    backgroundColor: 'white',
    borderRadius: 5
  }

  render() {
    return (
      <div className="card-body mx-auto" style={this.styleCard}>
        <div id="carousel-captions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" alt="" src="./image/docker.png" />
              <div className="carousel-item-background d-none d-md-block"></div>
              <div className="carousel-caption d-none d-md-block pb-0">
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" alt="" src="./image/linux.png" />
              <div className="carousel-item-background d-none d-md-block"></div>
              <div className="carousel-caption d-none d-md-block pb-0">
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" alt="" src="./image/shell.png" />
              <div className="carousel-item-background d-none d-md-block"></div>
              <div className="carousel-caption d-none d-md-block pb-0">
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel-captions" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-captions" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    )
  }
}