import React from "react";
import Head from 'next/head';
import store2 from 'store2'
import axios from "axios";
import marked from 'marked';
import { API_CONST } from "../../component/const/api";
import Navbar from "../../component/nabbar/nav-bar";
import dynamic from 'next/dynamic'
import hljs from "highlight.js";

export default class ContentBlog extends React.Component {

  static async getInitialProps({ asPath }) {
    const content = await axios.get(API_CONST + `/post/content/${asPath.replace("/blog/", "")}`);
    return {
      content: content.data
    };
  }

  render() {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight: function (code) {
        return hljs.highlightAuto(code, ["html", "javascript"]).value;
      }
    });

    return (
      <div>
        <Head>
          <title>Sudolab | {this.props.content[0].title}</title>
          <meta property="og:title" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="title" />
          <meta property="og:description" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="description" />
          <script async src="/tabler.min.js"></script>
          <link async rel="stylesheet" href="/tabler.min.css" />
          <link async rel="stylesheet" href="/code.css" />
        </Head>
        <Navbar></Navbar>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-8">
              <div className="container py-3 round conent-blog mt-2">
                <div dangerouslySetInnerHTML={{ __html: marked(this.props.content[0].content) }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}