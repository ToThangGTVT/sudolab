class Post {
  constructor(id, title, content, description, create_date, update_date, author, view, deleteFlag) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.description = description;
    this.create_date = create_date;
    this.update_date = update_date;
    this.author = author;
    this.view = view;
    this.deleteFlag = deleteFlag;
  }
}

module.exports = {
  Post: Post
};
