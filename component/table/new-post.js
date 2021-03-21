import React from "react";

export default class NewPost extends React.Component {

  formattedDate(date) {
    var todayTime = new Date(date);
    var month = todayTime.getMonth();
    if (month < 10) month = '0' + month
    var day = todayTime.getDate();
    if (day < 10) day = '0' + day
    var year = todayTime.getFullYear();
    return day + "/" + month + "/" + year;
  }

  render() {
    const { data } = this.props
    console.log("🚀 ~ file: new-post.js ~ line 7 ~ NewPost ~ render ~ this", data)
    return (
      <div>
        <div class="card">
          <div class="table-responsive" style={{ marginBottom: 0 }}>
            <table class="table table-vcenter card-table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tiêu đề</th>
                  <th>Nội dung chính</th>
                  <th>Ngày tạo</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((val, i) =>
                    <tr key={val.id}>
                      <td>{++i}</td>
                      <td class="text-muted"><a href="#" class="text-reset">{val.title},</a></td>
                      <td class="text-muted"><a href="#" class="text-reset">{val.description}</a></td>
                      <td class="text-muted">{this.formattedDate(val.create_date)}</td>
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