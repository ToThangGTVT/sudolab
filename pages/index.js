import React from "react";
import Head from 'next/head';
import Navbar from "../component/nav-bar";
import NewPost from "../component/table/new-post";
import Card from "../component/card/card";
import Carosel from "../component/carosel/carosel";
import Categories from "../component/categories/categories";
import Content from "../component/content/content";

import axios from "axios";
import { API_CONST } from "../component/const/api";

export default class Index extends React.Component {

  static async getInitialProps({ req }) {

    const resNewPost = await axios.get(API_CONST + '/post/new/5');
    const resCategory = await axios.get(API_CONST + '/category/all');
    const allPostMain = await axios.get(API_CONST + '/post/with-cat');

    return {
      newpost: resNewPost.data,
      category: resCategory.data,
      allPostMain: allPostMain.data
    };
  }

  render() {
    return (
      <div>
        <Head>
          <title>Sudolab | Java Spring JS và nhiều hơn thế nữa</title>
          <meta property="og:title" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="title" />
          <meta property="og:description" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="description" />
          <script async src="/tabler.min.js"></script>
          <link async rel="stylesheet" href="/tabler.min.css" />
        </Head>
        <Navbar></Navbar>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4">
              <Carosel></Carosel>
            </div>
            <div className="col-md-8">
              <NewPost data={this.props.newpost}></NewPost>
              <Categories data={this.props.category}></Categories>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h3 className="my-2 mx-2">Danh sách bài viết</h3>
              <Content data={this.props.allPostMain}></Content>
            </div>
            <div className="col-md-4">
              <h3 className="my-2 mx-2 text-center">Sudolab là gì</h3>
              <Card></Card>
            </div>

          </div>
        </div>
      </div>
    )
  }
}