import React from "react";

export default class Categories extends React.Component {

  render() {
    return (
      <div>
        <div className="my-3">
          <label className="form-label">Different style</label>
          <div className="form-selectgroup form-selectgroup-pills">
            <label className="form-selectgroup-item">
              <input type="checkbox" name="name" value="HTML" className="form-selectgroup-input" defaultChecked />
              <span className="form-selectgroup-label">HTML</span>
            </label>
            <label className="form-selectgroup-item">
              <input type="checkbox" name="name" value="CSS" className="form-selectgroup-input" />
              <span className="form-selectgroup-label">CSS</span>
            </label>
            <label className="form-selectgroup-item">
              <input type="checkbox" name="name" value="PHP" className="form-selectgroup-input" />
              <span className="form-selectgroup-label">PHP</span>
            </label>
            <label className="form-selectgroup-item">
              <input type="checkbox" name="name" value="JavaScript" className="form-selectgroup-input" />
              <span className="form-selectgroup-label">JavaScript</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}