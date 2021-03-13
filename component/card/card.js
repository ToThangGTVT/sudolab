import React from "react";

export default class Card extends React.Component {

  render() {
    return (
      <div>
        <div class="card">
          <div class="card-img-top img-responsive img-responsive-16by9" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></div>
          <div class="card-body">
            <h3 class="card-title">Card with top image</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
          neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
          </div>
        </div>
      </div>
    )
  }
}