import React from "react";
import Head from 'next/head';
import Navbar from "../component/nav-bar";
import NewPost from "../component/table/new-post";
import Card from "../component/card/card";
import Carosel from "../component/carosel/carosel";
import Categories from "../component/categories/categories";

export default class Index extends React.Component {

  render() {
    return (
      <div>
        <Head>
          <script src="https://unpkg.com/@tabler/core@1.0.0-beta/dist/js/tabler.min.js"></script>
          <link rel="stylesheet" href="https://unpkg.com/@tabler/core@1.0.0-beta/dist/css/tabler.min.css" />
        </Head>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Carosel></Carosel>
            </div>
            <div className="col-md-8">
              <NewPost></NewPost>
              <Categories></Categories>
            </div>
          </div>
        </div>
      </div>
    )
  }
}