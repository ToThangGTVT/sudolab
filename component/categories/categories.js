import React from "react";

export default class Categories extends React.Component {

  render() {
    const { data } = this.props
    return (
      <div>
        <div className="my-3">
          <label className="form-label">Thể loại bài viết</label>
          <div className="form-selectgroup form-selectgroup-pills">
            {
              data.map((val, i) =>
                <label key={val.id} className="form-selectgroup-item">
                  <input type="checkbox" name="name" value="HTML" className="form-selectgroup-input" />
                  <span className="form-selectgroup-label">{val.name + " (" + val.count + ")"}</span>
                </label>)
            }
          </div>
        </div>
      </div>
    )
  }
}