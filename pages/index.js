import React from "react";
import Head from 'next/head';
import Navbar from "../component/nabbar/nav-bar";
import NewPost from "../component/table/new-post";
import Card from "../component/card/card";
import CardBorderColor from "../component/card/card-border-color";
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
    const resNewPost = await axios.get(API_CONST + '/post/new/3');
    const resCategory = await axios.get(API_CONST + '/category/all');
    const allPostMain = await axios.get(API_CONST + `/post/with-cat?page=${--page}&limit=10`);
    const totalPost = await axios.get(API_CONST + `/post/total`);
    const topViewPost = await axios.get(API_CONST + `/post/top-view/3`);

    return {
      newpost: resNewPost.data,
      topViewPost: topViewPost.data,
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
          <link rel="icon" href="/icon/logo.svg" type="image/icon type"/>
          <meta property="og:title" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="title" />
          <meta property="og:description" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="description" />
          <script src="/tabler.min.js"></script>
          <link rel="stylesheet" href="/tabler.min.css" />
          <script data-ad-client="ca-pub-8590525040934290" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script async custom-element="amp-auto-ads"
             src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
          </script>
        </Head>
        <amp-auto-ads type="adsense"
           data-ad-client="ca-pub-8590525040934290">
        </amp-auto-ads>
        <Navbar></Navbar>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-3">
              <Carosel></Carosel>
            </div>
            <div className="col-md-9">
              <NewPost data={this.props.newpost}></NewPost>
              <Categories data={this.props.category}></Categories>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h2><strong className="my-2 mx-2 pt-1">Danh sách bài viết</strong></h2>
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
              <h2><strong className="my-2 mx-2 text-center pt-1">Sudolab là gì</strong></h2>
              <Card></Card>
              <h2 className="pt-3"><strong className="py-2 mx-2">Bài viết được xem nhiều nhất</strong></h2>
              <CardBorderColor data={this.props.topViewPost}></CardBorderColor>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
