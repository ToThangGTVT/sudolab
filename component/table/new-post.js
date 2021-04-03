import React from "react";
import { formatDate } from "../../utils/Utils";

export default class NewPost extends React.Component {

  render() {
    const { data } = this.props
    return (
      <div>
        <h3>Các bài viết mới nhất</h3>
        <div className="card">
          <div className="table-responsive" style={{ marginBottom: 0 }}>
            <table className="table table-vcenter card-table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tiêu đề</th>
                  <th>Nội dung chính</th>
                  <th style={{ width: 117, maxWidth: 117 }}>Ngày tạo</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((val, i) =>
                    <tr key={val.id}>
                      <td>{++i}</td>
                      <td className="text-muted"><a href={'/blog/' + val.link} className="text-reset">{val.title}</a></td>
                      <td className="text-muted"><a href={'/blog/' + val.link} className="text-reset">{val.description}</a></td>
                      <td className="text-muted">{formatDate(val.create_date)}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}