import React from "react";

export default class Card extends React.Component {

  render() {
    return (
      <div>
        <div className="card p-3">
          <div className="card-img-top img-responsive img-responsive-16by9" style={{ backgroundImage: "url(./image/developer.png)" }}></div>
          <div className="card-body" style={{ padding: "1rem 0rem" }}>
            <h3 className="card-title">Đôi lời giới thiệu</h3>
            <p>Sudolab là blog chuyên về công nghệ đôi khi có thể có những câu chuyện xàm xí khi đi làm bởi <kbd>#Tô</kbd> </p>
            <p>Sự ủng hộ của bạn giúp mình tích cực viết các bài viết mới hơn ❤</p>
          </div>
        </div>
      </div>
    )
  }
}