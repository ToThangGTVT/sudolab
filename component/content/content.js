import React from "react";
import { formatDate } from "../../utils/Utils";

export default class Content extends React.Component {

  styleCard = {
    borderRadius: "3px",
    backgroundColor: "white",
    boxShadow: "rgb(35 46 60 / 4%) 0 2px 4px 0",
    border: "1px solid rgba(101,109,119,.16)"
  }

  badgeSuccess = {
    "color": "#fff",
    "backgroundColor": "#28a745"
  }

  render() {
    const { data } = this.props;
    return (
      <div style={this.styleCard}>
        <div className="card-body card-body-scrollable card-body-scrollable-shadow">
          <div className="divide-y-4">
            {
              data.map((val, i) =>
                <div className="row">
                  <div className="col-auto">
                    <span className="avatar">{val.title.substring(0, 2)}</span>
                  </div>
                  <div className="col">
                    <a className="text-reset" href={'/blog/' + val.link}>
                      <h3><strong>{val.title + " "}</strong></h3>
                      {
                        val.category !== null ? <span className="badge" style={this.badgeSuccess}>{val.category}</span> : <div></div>
                      }
                    </a>
                    <div className="mt-1">
                      <a className="text-reset" href={'/blog/' + val.link}>
                        {val.description}
                      </a>
                    </div>
                    <div className="text-muted mt-2">Ngày viết: {formatDate(val.create_date)} <span> - Lượt xem: {val.view}</span></div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
