import React from "react";

export default class Card extends React.Component {

  render() {
    return (
      <div>
        <div className="card p-3">
          <div className="card-img-top img-responsive img-responsive-16by9" style={{ backgroundImage: "url(./image/developer.png)" }}></div>
          <div className="card-body" style={{ padding: "1rem 0rem" }}>
            <h3 className="card-title">Card with top image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
          neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
          </div>
        </div>
      </div>
    )
  }
}