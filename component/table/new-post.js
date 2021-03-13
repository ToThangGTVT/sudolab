import React from "react";

export default class NewPost extends React.Component {

  render() {
    return (
      <div>
        <div class="card">
          <div class="table-responsive" style={{ marginBottom: 0 }}>
            <table class="table table-vcenter card-table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th class="w-1"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maryjo Lebarree</td>
                  <td class="text-muted">
                    Civil Engineer, Product Management
              </td>
                  <td class="text-muted"><a href="#" class="text-reset">mlebarree5@unc.edu</a></td>
                  <td class="text-muted">
                    User
              </td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td>Egan Poetz</td>
                  <td class="text-muted">
                    Research Nurse, Engineering
              </td>
                  <td class="text-muted"><a href="#" class="text-reset">epoetz6@free.fr</a></td>
                  <td class="text-muted">
                    Admin
              </td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td>Kellie Skingley</td>
                  <td class="text-muted">
                    Teacher, Services
              </td>
                  <td class="text-muted"><a href="#" class="text-reset">kskingley7@columbia.edu</a></td>
                  <td class="text-muted">
                    User
              </td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td>Christabel Charlwood</td>
                  <td class="text-muted">
                    Tax Accountant, Engineering
              </td>
                  <td class="text-muted"><a href="#" class="text-reset">ccharlwood8@nifty.com</a></td>
                  <td class="text-muted">
                    Owner
              </td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td>Haskel Shelper</td>
                  <td class="text-muted">
                    Staff Scientist, Legal
              </td>
                  <td class="text-muted"><a href="#" class="text-reset">hshelper9@woothemes.com</a></td>
                  <td class="text-muted">
                    Admin
              </td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}