import React from "react";

export default class Content extends React.Component {

  styleCard = {
    borderRadius: "3px",
    backgroundColor: "white",
    boxShadow: "rgb(35 46 60 / 4%) 0 2px 4px 0",
    border: "1px solid rgba(101,109,119,.16)"
  }

  render() {
    return (
      <div style={this.styleCard}>
        <div className="card-body card-body-scrollable card-body-scrollable-shadow">
          <div className="divide-y-4">
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar">JL</span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Jeffie Lewzey</strong> commented on your <strong>"I'm not a witch."</strong> post.
              </div>
                  <div className="text-muted">yesterday</div>
                </div>
                <div className="col-auto align-self-center">
                  <div className="badge bg-primary"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar"></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    It's <strong>Mallory Hulme</strong>'s birthday. Wish him well!
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
                <div className="col-auto align-self-center">
                  <div className="badge bg-primary"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Dunn Slane</strong> posted <strong>"Well, what do you want?"</strong>.
              </div>
                  <div className="text-muted">today</div>
                </div>
                <div className="col-auto align-self-center">
                  <div className="badge bg-primary"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Emmy Levet</strong> created a new project <strong>Morning alarm clock</strong>.
              </div>
                  <div className="text-muted">4 days ago</div>
                </div>
                <div className="col-auto align-self-center">
                  <div className="badge bg-primary"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Maryjo Lebarree</strong> liked your photo.
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar">EP</span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Egan Poetz</strong> registered new client as <strong>Trilia</strong>.
              </div>
                  <div className="text-muted">yesterday</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Kellie Skingley</strong> closed a new deal on project <strong>Pen Pineapple Apple Pen</strong>.
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Christabel Charlwood</strong> created a new project for <strong>Wikibox</strong>.
              </div>
                  <div className="text-muted">4 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar">HS</span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Haskel Shelper</strong> change status of <strong>Tabler Icons</strong> from <strong>open</strong> to <strong>closed</strong>.
              </div>
                  <div className="text-muted">today</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Lorry Mion</strong> liked <strong>Tabler UI Kit</strong>.
              </div>
                  <div className="text-muted">yesterday</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Leesa Beaty</strong> posted new video.
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Perren Keemar</strong> and 3 others followed you.
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar">SA</span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Sunny Airey</strong> upload 3 new photos to category <strong>Inspirations</strong>.
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Geoffry Flaunders</strong> made a <strong>$10</strong> donation.
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Thatcher Keel</strong> created a profile.
              </div>
                  <div className="text-muted">3 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Dyann Escala</strong> hosted the event <strong>Tabler UI Birthday</strong>.
              </div>
                  <div className="text-muted">4 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar" style={{ backgroundImage: "url(https://static.wixstatic.com/media/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.png/v1/fill/w_586,h_507,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_9c85c6a4692e4a38bae692ba782a816a~mv2.webp)" }}></span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Avivah Mugleston</strong> mentioned you on <strong>Best of 2020</strong>.
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-auto">
                  <span className="avatar">AA</span>
                </div>
                <div className="col">
                  <div className="text-truncate">
                    <strong>Arlie Armstead</strong> sent a Review Request to <strong>Amanda Blake</strong>.
              </div>
                  <div className="text-muted">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}