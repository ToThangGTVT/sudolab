import Head from "next/head"
import React, { Fragment } from "react"
import Navbar from "../component/nabbar/nav-bar"

export default class NotFound extends React.Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Lỗi 404!!!</title>
          <script src="/tabler.min.js"></script>
          <link rel="stylesheet" href="/tabler.min.css" />
        </Head>
        <Navbar></Navbar>
        <div class="page-body">
          <div class="container-xl d-flex flex-column justify-content-center">
            <div class="empty">
              <div class="empty-img"><img src="/image/404.svg" style={{ height: 250 }} alt="" />
              </div>
              <p class="empty-title">Không thấy gì cả</p>
              <p class="empty-subtitle text-muted">
                Có vẻ bạn thích nghịch ngợm ha 😂😂
            </p>
              <div class="empty-action">
                <a href="./." class="btn btn-primary">
                  Quay lại trang chủ
              </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}