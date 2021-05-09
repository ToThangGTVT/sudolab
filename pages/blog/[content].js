import React from "react";
import Head from 'next/head';
import store2 from 'store2'
import axios from "axios";
import marked from 'marked';
import { API_CONST } from "../../component/const/api";
import Navbar from "../../component/nabbar/nav-bar";
import dynamic from 'next/dynamic'
import hljs from "highlight.js";
import CardBorderColor from "../../component/card/card-border-color";

export default class ContentBlog extends React.Component {

  static async getInitialProps({ asPath }) {
    const content = await axios.get(API_CONST + `/post/content/${asPath.replace("/blog/", "")}`);
    const topViewPost = await axios.get(API_CONST + `/post/top-view/3`);
    return {
      content: content.data,
      topViewPost: topViewPost.data
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
          <link rel="icon" href="/icon/logo.svg" type="image/icon type" />
          <meta property="og:title" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="title" />
          <meta property="og:description" content="Sudolab | Java Spring JS và nhiều hơn thế nữa" key="description" />
          <script async src="/tabler.min.js"></script>
          <link async rel="stylesheet" href="/tabler.min.css" />
          <link async rel="stylesheet" href="/code.css" />
          <script data-ad-client="ca-pub-8590525040934290" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script async custom-element="amp-auto-ads"
            src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
          </script>
        </Head>
        <amp-auto-ads type="adsense"
          data-ad-client="ca-pub-8590525040934290">
        </amp-auto-ads>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=206735400384185&autoLogAppEvents=1" nonce="5DF4HzhA"></script>
        <Navbar></Navbar>

        <div className="container pb-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
              <li class="breadcrumb-item"><a href="/">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">{this.props.content[0].title}</li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-md-8">
              <div className="container py-3 round conent-blog mt-2" style={{ lineHeight: 1.8 }}>
                <div dangerouslySetInnerHTML={{ __html: marked(this.props.content[0].content) }} />
              </div>
            </div>
            <div className="col-md-4 pt-2">
              <h2><strong className="py-2 mx-2">Cùng chuyên mục</strong></h2>
              <CardBorderColor data={this.props.topViewPost}></CardBorderColor>
              <div class="card mt-3">
                <div class="card-body p-2">
                  <div class="fb-page" data-href="https://www.facebook.com/chatbot.utc/" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/chatbot.utc/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/chatbot.utc/">UTC Chatbot - Trò chuyện với người lạ</a></blockquote></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
