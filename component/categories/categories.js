import React from "react";

export default class Categories extends React.Component {

  render() {
    return (
      <div>
        <div class="my-3">
          <label class="form-label">Different style</label>
          <div class="form-selectgroup form-selectgroup-pills">
            <label class="form-selectgroup-item">
              <input type="checkbox" name="name" value="HTML" class="form-selectgroup-input" checked="" />
              <span class="form-selectgroup-label">HTML</span>
            </label>
            <label class="form-selectgroup-item">
              <input type="checkbox" name="name" value="CSS" class="form-selectgroup-input" />
              <span class="form-selectgroup-label">CSS</span>
            </label>
            <label class="form-selectgroup-item">
              <input type="checkbox" name="name" value="PHP" class="form-selectgroup-input" />
              <span class="form-selectgroup-label">PHP</span>
            </label>
            <label class="form-selectgroup-item">
              <input type="checkbox" name="name" value="JavaScript" class="form-selectgroup-input" />
              <span class="form-selectgroup-label">JavaScript</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}