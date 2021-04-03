import React from "react";
import Head from 'next/head';
import Navbar from "../component/nabbar/nav-bar";
import NewPost from "../component/table/new-post";
import Card from "../component/card/card";
import Carosel from "../component/carosel/carosel";
import Categories from "../component/categories/categories";
import Content from "../component/content/content";
import Router from 'next/router'
import store2 from 'store2'

import axios from "axios";
import { API_CONST } from "../component/const/api";
import ReactPaginate from 'react-paginate';

export default class Index extends React.Component {

  static async getInitialProps({ query: { page = 1 } }) {
    const resNewPost = await axios.get(API_CONST + '/post/new/5');
    const resCategory = await axios.get(API_CONST + '/category/all');
    const allPostMain = await axios.get(API_CONST + `/post/with-cat?page=${--page}&limit=10`);
    const totalPost = await axios.get(API_CONST + `/post/total`);

    return {
      newpost: resNewPost.data,
      category: resCategory.data,
      allPostMain: allPostMain.data,
      totalPost: totalPost.data[0].total / 10,
      page: page
    };
  }

  handlePageClick(data) {
    window.location = `/?page=${data.selected + 1}`;
    store2.set('page', data.selected)
  }

  render() {
    return (
      <div>
        <Head>
          <title>Sudolab | Java Spring JS và nhiều hơn thế nữa</title>
          <meta property="og:title" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="title" />
          <meta property="og:description" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="description" />
          <script src="/tabler.min.js"></script>
          <link rel="stylesheet" href="/tabler.min.css" />
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
              <div className="d-flex justify-content-center pt-3">
                <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={this.props.totalPost}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={'pagination'}
                  activeClassName={'page-item active'}
                  pageLinkClassName={'page-link'}
                  pageClassName={'page-item'}
                  nextClassName={'page-item'}
                  nextLinkClassName={'page-link'}
                  previousClassName={'page-item'}
                  previousLinkClassName={'page-link'}
                  forcePage={this.props.page}
                />
              </div>
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
