import React from "react";

export default class Carosel extends React.Component {

  styleCard = {
    borderRadius: "3px",
    backgroundColor: "white"
  }

  render() {
    return (
      <div>
        <div className="card-body" style={this.styleCard}>
          <div id="carousel-captions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" alt="" src="https://kenh14cdn.com/thumb_w/620/2017/cute-dog-shiba-inu-ryuji-japan-1-1492164409885.jpg" />
                <div className="carousel-item-background d-none d-md-block"></div>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="" src="https://kenh14cdn.com/thumb_w/620/2017/cute-dog-shiba-inu-ryuji-japan-12-1492164409887.jpg" />
                <div className="carousel-item-background d-none d-md-block"></div>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="" src="https://kenh14cdn.com/thumb_w/620/2017/cute-dog-shiba-inu-ryuji-japan-29-1492164409913.jpg" />
                <div className="carousel-item-background d-none d-md-block"></div>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="" src="https://kenh14cdn.com/thumb_w/620/2017/cute-dog-shiba-inu-ryuji-japan-17-1492164409898.jpg" />
                <div className="carousel-item-background d-none d-md-block"></div>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="" src="https://kenh14cdn.com/thumb_w/620/2017/cute-dog-shiba-inu-ryuji-japan-18-1492164409900.jpg" />
                <div className="carousel-item-background d-none d-md-block"></div>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      </div>
    )
  }
}