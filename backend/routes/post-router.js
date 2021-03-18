module.exports = function postRoute(app) {
  app.route('/post')
    .get(function (req, res) {
      res.send('Hello World!');
    })
    .post(function (req, res) {
      res.send('Got a POST request');
    })
    .put(function (req, res) {
      res.send('Got a PUT request at /user');
    })
    .delete(function (req, res) {
      res.send('Got a DELETE request at /user');
    });
}
