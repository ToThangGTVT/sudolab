import React from "react";
import Head from 'next/head';
import Navbar from "../component/nav-bar";

export default class Index extends React.Component {

  render() {
    return (
      <div>
        <Head>
          <script src="https://unpkg.com/@tabler/core@1.0.0-beta/dist/js/tabler.min.js"></script>
          <link rel="stylesheet" href="https://unpkg.com/@tabler/core@1.0.0-beta/dist/css/tabler.min.css" />
        </Head>
        <Navbar></Navbar>
      </div>
    )
  }
}